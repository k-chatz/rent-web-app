import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.maxLength(6)]],
        confirmPassword: ['', Validators.required],
      }, {validator: passwordMatcher}),
    });
  }

  signIn($event: MouseEvent) {
    console.log($event);
    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
  }

  signUp($event: MouseEvent) {
    console.log($event);
    const container = document.getElementById('container');
    container.classList.add('right-panel-active');
  }

  onSubmit(data: any) {
    console.log(data);
  }
}
