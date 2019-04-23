import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {LoginForm} from '../../../shared/models/payload/login-form';

function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const passwordControl = c.get('password');
  const confirmPasswordControl = c.get('confirmPassword');

  if (passwordControl.pristine || confirmPasswordControl.pristine) {
    return null;
  }

  if (passwordControl.value === confirmPasswordControl.value) {
    return null;
  }
  return {match: true};
}

@Component({
  selector: 'app-connect-form',
  templateUrl: './connect-form.component.html',
  styleUrls: ['./connect-form.component.scss']
})
export class ConnectFormComponent implements OnInit, OnDestroy {
  @ViewChild('loginFormEmail') loginFormEmail: ElementRef;
  loginProgress = false;
  registerProgress = false;
  loginForm: FormGroup;
  registerForm: FormGroup;
  routeSub: Subscription;
  returnUrl: string;

  constructor(
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private rfb: FormBuilder,
    private lfb: FormBuilder
  ) {
  }

  ngOnInit() {
    console.log('connect form ng on init');
    this.loginForm = this.lfb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
    this.registerForm = this.rfb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        passwordGroup: this.rfb.group(
          {
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
          }, {validator: passwordMatcher}
        ),
      }
    );
    this.routeSub = this.route.queryParams
      .subscribe((params: any) => {
        this.returnUrl = params.returnUrl;
      });
  }

  signIn($event: MouseEvent) {
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  }

  signUp($event: MouseEvent) {
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  }

  onLoginSubmit(data: LoginForm) {
    this.loginForm.markAsPristine();
    this.loginProgress = true;
    this.auth.login(data)
      .pipe(first())
      .subscribe((response: any) => {
          console.log('response', response);
          this.loginProgress = false;
          this.loginForm.get('email').setValue('');
          this.loginForm.get('password').setValue('');
          document.getElementById('connectModal').click();
          if (this.returnUrl) {
            this.router.navigate([this.returnUrl]);
          } else {
            this.router.navigate(['/']);
          }
        },
        error => {
          console.error(error);
          this.loginProgress = false;
          this.loginForm.get('email').setValue('');
          this.loginForm.get('password').setValue('');
          this.loginFormEmail.nativeElement.focus();
        });
  }

  onRegisterSubmit(data: any) {
    console.log(data);
    this.registerForm.get('username').setValue('');
    this.registerForm.get('email').setValue('');
    this.registerForm.get('passwordGroup').get('password').setValue('');
    this.registerForm.get('passwordGroup').get('confirmPassword').setValue('');
  }

  ngOnDestroy(): void {
    if (this.routeSub !== undefined) {
      this.routeSub.unsubscribe();
    }
  }
}
