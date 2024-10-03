import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value;
  const valid = email.endsWith('@wilder.school');

  const errors = {
    email: {
      rules: 'must end with @wilder.school'
    }
  };

  return !valid ? errors : null;
}
