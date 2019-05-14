import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';
import {User} from '../models/user';
import {Role} from '../models/role';
import {environment} from '../../../environments/environment';

const users: User[] = [
  {
    id: 1,
    username: 'test',
    email: 'test@test.com',
    password: 'test',
    role: Role.User,
    locked: false,
  },
  {
    id: 2,
    username: 'kwstarikanos',
    email: 'kwstarikanos@gmail.com',
    password: '123456',
    role: Role.Admin,
    locked: false,
  }
];

@Injectable()
export class MockInterceptor implements HttpInterceptor {

  static ok(body) {
    return of(new HttpResponse({status: 200, body}));
  }

  static unauthorised() {
    return throwError({status: 401, error: {message: 'Unauthorised'}});
  }

  static error(message) {
    return throwError({status: 400, error: {message}});
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('request', request);
    const authHeader = request.headers.get('Authorization');
    const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
    return of(null).pipe(
      mergeMap(() => {
        if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
          console.log('request', request);
          const user = users.find(x => x.email === request.body.email && x.password === request.body.password);
          return MockInterceptor.ok({
            id: user.id,
            token: `fake-jwt-token`
          });
        }
        return next.handle(request);
      })
    ).pipe(materialize()).pipe(delay(0)).pipe(dematerialize());
  }
}
export let mockProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockInterceptor,
  multi: true
};
