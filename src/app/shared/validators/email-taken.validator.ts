import {AbstractControl} from '@angular/forms';
import {CheckService} from '../services/check.service';
import {map} from 'rxjs/operators';

export class ValidateEmailNotTaken {
  static createValidator(check: CheckService) {
    return (control: AbstractControl) => {
      return check.checkEmailExists(control.value).pipe(
        map(res => {
          console.log('res', res);
          return res.exists ? {emailTaken: true} : null;
        })
      );
    };
  }
}
