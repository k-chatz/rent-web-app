import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {first} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {LoginForm} from '../../../shared/models/payload/login-form';
import {Title} from '@angular/platform-browser';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('loginFormEmail') loginFormEmail: ElementRef;
  progress = false;
  form: FormGroup;
  routeSub: Subscription;
  returnUrl: string = null;

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private toastr: ToastrService
  ) {
    titleService.setTitle(environment.appName + ' :: ' + 'Login');
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        remember: [false]
      }
    );
  }

  ngOnInit(): void {
    this.loginFormEmail.nativeElement.focus();
    this.routeSub = this.route.queryParams
      .subscribe((params: any) => {
        this.returnUrl = params.returnUrl;
      });
  }

  submit(data: any): void {
    console.log({
      email: data.email,
      password: data.password
    });
    this.form.markAsPristine();
    this.progress = true;
    this.auth.login(data).subscribe((response: any) => {
        console.log('response', response);
        this.progress = false;
        this.toastr.info('We are happy to have you!', 'Welcome back ' + response.user.username + '!',
          {
            timeOut: 8000
          });
        if (this.returnUrl) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.router.navigate(['/']);
        }
      },
      error => {
        console.error('error', error);
        this.progress = false;
        this.form.reset();
      });
  }

  ngOnDestroy(): void {
    if (this.routeSub !== undefined) {
      this.routeSub.unsubscribe();
    }
  }
}
