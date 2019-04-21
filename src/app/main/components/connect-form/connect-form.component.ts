import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {first} from 'rxjs/operators';

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
export class ConnectFormComponent implements OnInit {
  @ViewChild('loginFormEmail') loginFormEmail: ElementRef;
  loginProgress = false;
  registerProgress = false;
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private auth: AuthenticationService,
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
    console.log(data);
    this.loginForm.markAsPristine();
    this.loginProgress = true;
    this.auth.login(data.email, data.password)
      .pipe(first())
      .subscribe((response: any) => {
          console.log('response', response);
          this.loginProgress = false;
          this.loginForm.get('email').setValue('');
          this.loginForm.get('password').setValue('');
          document.getElementById('connectModal').click();
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
}
