import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {timeout} from 'rxjs/operators';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  constructor(@Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timeoutValue = Number(request.headers.get('timeout')) || this.defaultTimeout;
    return next.handle(request).pipe(timeout(timeoutValue));
  }
}
export let timeoutProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: TimeoutInterceptor,
  multi: true
};
