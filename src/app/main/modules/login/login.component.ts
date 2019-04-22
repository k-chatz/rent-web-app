import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {first} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('loginFormEmail') loginFormEmail: ElementRef;
  loginProgress = false;
  loginForm: FormGroup;
  routeSub: Subscription;
  returnUrl: string = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        remember: [true]
      }
    );
    this.loginFormEmail.nativeElement.focus();

    this.routeSub = this.route.queryParams
      .subscribe((params: any) => {
        this.returnUrl = params.returnUrl;
      });
  }

  submit(data: LoginForm): void {
    console.log(data);
    this.loginForm.markAsPristine();
    this.loginProgress = true;
    this.auth.login(data.email, data.password)
      .pipe(first())
      .subscribe((response: any) => {
          console.log('response', response);
          this.loginProgress = false;
          if (this.returnUrl) {
            this.router.navigate([this.returnUrl]);
          } else {
            this.router.navigate(['/']);
          }
        },
        error => {
          console.error('error', error);
          this.loginProgress = false;
          this.loginForm.reset();
        });
  }

  ngOnDestroy(): void {
    if (this.routeSub !== undefined) {
      this.routeSub.unsubscribe();
    }
  }
}
