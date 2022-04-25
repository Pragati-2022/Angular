import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static match(group: AbstractControl): ValidationErrors | null {
    const control = group.get('password');
    const matchingControl = group.get('confirmPassword');

    let error : any;

    if (control && matchingControl) {

        // if(control.value === matchingControl.value){
        //     return null;
        // }
        // else{
        //     return { match : true }
        // }

        error = (control.value === matchingControl.value) ? null :  { match : true }
    }
    return error;
  }
}
