import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginFormEmail') loginFormEmail: ElementRef;
  loginProgress = false;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
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
  }

  submit(data: LoginForm): void {
    console.log(data);
    this.loginForm.markAsPristine();
    this.loginProgress = true;
    this.auth.login(data.email, data.password)
      .pipe(first())
      .subscribe((response: any) => {
          console.log(response);
          this.loginProgress = false;
          this.loginForm.get('email').setValue('');
          this.loginForm.get('password').setValue('');
          console.log('this.router', this.router);
        },
        error => {
          console.error(error);
          this.loginProgress = false;
          this.loginForm.get('email').setValue('');
          this.loginForm.get('password').setValue('');
        });
  }
}
