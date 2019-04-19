import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

function getRandomColor() {
  const color = Math.floor(0x1000000 * Math.random()).toString(16);
  return ('000000' + color).slice(-6);
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject$: BehaviorSubject<User>;
  currentUser$: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser$')));
    this.currentUser$ = this.currentUserSubject$.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject$.value;
  }

  login(username: string, password: string) {
    console.log('login');
    return this.http.post<any>(`/users/authenticate`, {username, password})
      .pipe(map(user => {
        console.log('user', user);
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));

          console.log('getRandomColor', getRandomColor());

          this.currentUserSubject$.next({
            ...user,
            photoUrl: user.photoUrl ? user.photoUrl : 'https://ui-avatars.com/api/?name=' +
              user.firstName + '+' + user.lastName +
              '&rounded=true&%20bold=true&background=' + getRandomColor()
          });
        }
        return user;
      }));
  }

  logout() {
    console.log('logout');
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject$.next(null);
  }
}
