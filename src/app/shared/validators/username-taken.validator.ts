import {AbstractControl} from '@angular/forms';
import {CheckService} from '../services/check.service';
import {map} from 'rxjs/operators';

export class ValidateUsernameNotTaken {
  static createValidator(check: CheckService) {
    return (control: AbstractControl) => {
      return check.checkUsernameExists(control.value).pipe(
        map(res => {
          console.log('res', res);
          return res.exists ? {usernameTaken: true} : null;
        })
      );
    };
  }
}
