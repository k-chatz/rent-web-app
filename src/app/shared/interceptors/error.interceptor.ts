import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(e => {
          if (e instanceof HttpErrorResponse) {
            this.toastr.error(e.message, 'Unreachable host...');
            return throwError(e);
          } else {
            if (e.name && e.name === 'TimeoutError') {
              this.toastr.error(request.url + ': ' + e.message, 'Request timeout...');
              return throwError(e);
            } else {
              this.toastr.error(request.url + ':: ' + e.error ? e.error.message : '', e.error.status + ' ' + e.error.error);
              if (e.status === 401) {
                this.authenticationService.logout();
              }
              return throwError(e.error.message || e.statusText);
            }
          }
        }
      )
    );
  }
}
export let errorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
