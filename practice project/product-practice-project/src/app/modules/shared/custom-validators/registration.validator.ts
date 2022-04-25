import { AbstractControl, ValidationErrors } from '@angular/forms';

export class RegistrationValidator {
  static match(password: string, confirmPassword: string) {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(password);
      const matchingControl = group.get(confirmPassword);

      if (control?.value && matchingControl?.value) {
        let error =
          (control.value === matchingControl.value) ? null : { match: true };

        return error;
      } else {
        return null;
      }
    };
  }
}
