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
        console.error('e', e);
        this.toastr.error(e.url + ':: ' + e.error.message, e.error.status + ' ' + e.error.error);
        if (e.status === 401) {
          this.authenticationService.logout();
        }
        const error = e.error.message || e.statusText;
        return throwError(error);
      })
    );
  }
}
export let errorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
