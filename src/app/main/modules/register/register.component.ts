import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {first} from 'rxjs/internal/operators/first';
import * as moment from 'moment';
import {ToastrService} from 'ngx-toastr';
import {Title} from '@angular/platform-browser';
import {ValidateEmailNotTaken} from '../../../shared/validators/email-taken.validator';
import {CheckService} from '../../../shared/services/check.service';
import {ValidateUsernameNotTaken} from '../../../shared/validators/username-taken.validator';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  @ViewChild('registerFormName') registerFormName: ElementRef;
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
    private toastr: ToastrService,
    private check: CheckService
  ) {
    titleService.setTitle(environment.appName + ' :: ' + 'Register');
    this.form = this.fb.group(
      {
        username: ['', {
          validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
          asyncValidators: [ValidateUsernameNotTaken.createValidator(this.check)],
          updateOn: 'blur'
        }],
        email: ['', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [ValidateEmailNotTaken.createValidator(this.check)],
          updateOn: 'blur'
        }],
        passwordGroup: this.fb.group({
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
            confirmPassword: ['', Validators.required],
          }, {
            validator: (group: FormGroup) => {
              const pass = group.controls.password.value;
              const confirmPassword = group.controls.confirmPassword.value;
              if (pass === confirmPassword) {
                return null;
              } else {
                return {notSame: true};
              }
            }
          }
        ),
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        remember: [false]
      }
    );
  }

  ngOnInit(): void {
    this.registerFormName.nativeElement.focus();
    this.routeSub = this.route.queryParams
      .subscribe((params: any) => {
        console.log('params', params);
        this.returnUrl = params.returnUrl;
      });
  }

  submit(data: any): void {
    console.log(data);
    this.form.markAsPristine();
    this.progress = true;
    this.auth.register({
      username: data.username,
      email: data.email,
      password: data.passwordGroup.password,
      name: data.name,
      surname: data.surname,
      birthday: moment().format('YYYY-MM-DD')
    })
      .pipe(first())
      .subscribe((response: any) => {
          console.log('response', response);
          this.progress = false;
          this.form.reset();
          this.toastr.success('We are happy to have you!', 'Welcome aboard ' + response.user.profile.name + '!',
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
        });
  }

  ngOnDestroy(): void {
    if (this.routeSub !== undefined) {
      this.routeSub.unsubscribe();
    }
  }
}
