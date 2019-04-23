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

  login(data: any) {
    console.log('data', data);
    return this.http.post<any>(environment.apiRoot + '/auth/login', data)
      .pipe(
        map((response: any) => {
          console.log('d', response);
          // login successful if there's a jwt token in the response
          if (response && response.access.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            const session = {
              access: response.access,
              user: {
                ...response.user,
                role: response.user.role.name,
                photoUrl: 'https://ui-avatars.com/api/?name=' + response.user.name + '+' + response.user.surname +
                  '&rounded=true&%20bold=true&background=' + getRandomColor()
              }
            };
            localStorage.setItem('session', JSON.stringify(session));
            this.sessionSubject$.next(session);
          }
          return response;
        })
      );
  }

  register(data: any) {
    console.log('data', data);
    return this.http.post<any>(environment.apiRoot + '/auth/register', data)
      .pipe(
        map((response: any) => {
          console.log('d', response);
          // login successful if there's a jwt token in the response
          if (response && response.access.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            const session = {
              access: response.access,
              user: {
                ...response.user,
                role: response.user.role.name,
                photoUrl: 'https://ui-avatars.com/api/?name=' + response.user.name + '+' + response.user.surname +
                  '&rounded=true&%20bold=true&background=' + getRandomColor()
              }
            };
            localStorage.setItem('session', JSON.stringify(session));
            this.sessionSubject$.next(session);
          }
          return response;
        })
      );
  }

  logout() {
    console.log('logout');
    // remove user from local storage to log user out
    localStorage.removeItem('session');
    this.sessionSubject$.next(null);
  }

  mockLogin(data: any) {
    console.log('data', data);
    return this.http.post<any>(`/users/authenticate`, data)
      .pipe(
        map((response: any) => {
          console.log('d', response);
          // login successful if there's a jwt token in the response
          if (response && response.access.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            const session = {
              access: response.access,
              user: {
                ...response.user,
                role: response.user.role.name,
                photoUrl: 'https://ui-avatars.com/api/?name=' + response.user.name + '+' + response.user.surname +
                  '&rounded=true&%20bold=true&background=' + getRandomColor()
              }
            };
            localStorage.setItem('session', JSON.stringify(session));
            this.sessionSubject$.next(session);
          }
          return response;
        })
      );
  }

}
