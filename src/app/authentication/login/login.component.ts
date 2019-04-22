import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formEmail') formEmail: ElementRef;
  loginProgress = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        remember: [true]
      }
    );
  }

  submit(data: any): void {
    console.log(data);
    this.form.markAsPristine();
    this.loginProgress = true;
    this.auth.login(data.email, data.password)
      .pipe(first())
      .subscribe((response: any) => {
          console.log(response);
          this.loginProgress = false;
          this.form.get('email').setValue('');
          this.form.get('password').setValue('');
          console.log('this.router', this.router);
        },
        error => {
          console.error(error);
          this.loginProgress = false;
          this.form.get('email').setValue('');
          this.form.get('password').setValue('');
        });
  }
}
