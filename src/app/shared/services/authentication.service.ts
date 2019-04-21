import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Session} from '../models/session';
import {environment} from '../../../environments/environment';

function getRandomColor() {
  const color = Math.floor(0x1000000 * Math.random()).toString(16);
  return ('000000' + color).slice(-6);
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private sessionSubject$: BehaviorSubject<Session>;
  session$: Observable<Session>;

  constructor(private http: HttpClient) {
    this.sessionSubject$ = new BehaviorSubject<Session>(JSON.parse(localStorage.getItem('session')));
    this.session$ = this.sessionSubject$.asObservable();
  }

  public get session(): any {
    return this.sessionSubject$.value;
  }

  login(email: string, password: string) {
    console.log('login');

    return this.http.post<any>(environment.apiRoot + '/auth/login', {email, password})
      .pipe(
        map((data: any) => {
          console.log('data', data);
          // login successful if there's a jwt token in the response
          if (data && data.access.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            const session = {
              access: data.access,
              user: {
                ...data.user,
                role: data.user.role.name,
                photoUrl: 'https://ui-avatars.com/api/?name=' + data.user.name + '+' + data.user.surname +
                  '&rounded=true&%20bold=true&background=' + getRandomColor()
              }
            };
            localStorage.setItem('session', JSON.stringify(session));
            this.sessionSubject$.next(session);
          }
          return data;
        })
      );
    /*    return this.http.post<any>(`/users/authenticate`, {email, password})
          .pipe(
            map(user => {
              console.log('user', user);
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('session', JSON.stringify(user));

                console.log('getRandomColor', getRandomColor());

                this.sessionSubject$.next({
                  ...user,
                  photoUrl: user.photoUrl ? user.photoUrl : 'https://ui-avatars.com/api/?name=' +
                    user.name + '+' + user.surname +
                    '&rounded=true&%20bold=true&background=' + getRandomColor()
                });
              }
              return user;
            })
          );*/
  }

  logout() {
    console.log('logout');
    // remove user from local storage to log user out
    localStorage.removeItem('session');
    this.sessionSubject$.next(null);
  }
}
