import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  @ViewChild('registerFormUsername') registerFormUsername: ElementRef;
  progress = false;
  form: FormGroup;
  routeSub: Subscription;
  returnUrl: string = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthenticationService
  ) {
    this.form = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        passwordGroup: this.fb.group({
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
            confirmPassword: ['', Validators.required],
          }, {
            validator: (group: FormGroup) => {
              console.log(group);
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
        remember: [true]
      }
    );
  }

  ngOnInit(): void {
    this.registerFormUsername.nativeElement.focus();
    this.routeSub = this.route.queryParams
      .subscribe((params: any) => {
        this.returnUrl = params.returnUrl;
      });
  }

  submit(data: LoginForm): void {
    console.log(data);
    /*this.form.markAsPristine();
    this.progress = true;
    this.auth.login(data.email, data.password)
      .pipe(first())
      .subscribe((response: any) => {
          console.log('response', response);
          this.progress = false;
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
        });*/
  }

  ngOnDestroy(): void {
    if (this.routeSub !== undefined) {
      this.routeSub.unsubscribe();
    }
  }
}
