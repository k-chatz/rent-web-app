import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';
import {ToastrService} from 'ngx-toastr';
import * as HttpStatus from 'http-status-codes';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((e: any) => {
        if (e instanceof HttpErrorResponse) {
          switch (e.status) {
            case HttpStatus.BAD_REQUEST : {
              this.toastr.warning('<strong>URL:&nbsp;</strong>' + request.url +
                '<br/><strong>REASON:&nbsp;</strong>' + e.error.errors, e.status + ' BAD REQUEST');
              break;
            }
            case HttpStatus.FORBIDDEN : {
              this.toastr.warning('<strong>URL:&nbsp;</strong>' + request.url +
                '<br/><strong>REASON:&nbsp;</strong>' + e.error.errors, e.status + ' FORBIDDEN');
              break;
            }
            case HttpStatus.UNAUTHORIZED : {
              this.toastr.warning('<strong>URL:&nbsp;</strong>' + request.url +
                '<br/><strong>REASON:&nbsp;</strong>' + e.error.errors, e.status + ' UNAUTHORIZED');
              this.authenticationService.logout();
              break;
            }
            case HttpStatus.NOT_FOUND : {
              this.toastr.warning('<strong>URL:&nbsp;</strong>' + request.url +
                '<br/><strong>REASON:&nbsp;</strong>' + e.error.errors, e.status + ' NOT FOUND');
              break;
            }
            default: {
              this.toastr.error(request.url + ':: ' + e.error.errors, e.error.status + ' ');
              break;
            }
          }
        } else {
          if (e.name && e.name === 'TimeoutError') {
            this.toastr.error('<strong>URL:&nbsp;</strong>' + request.url +
              '<br/><strong>REASON:&nbsp;</strong>' + e.message, 'REQUEST TIMEOUT');
          }
        }
        return throwError(e);
      }));
  }
}

export let errorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
