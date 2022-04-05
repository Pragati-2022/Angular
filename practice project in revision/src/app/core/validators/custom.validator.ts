import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { cannotContainSpace: true };
    } else {
      return null;
    }
  }

  static shouldBeUnique(unames: any[]) {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          var name = unames.find((e) => e === control.value);
          if (name) {
            resolve({ shouldBeUnique: true });
          } else {
            resolve(null);
          }
        }, 2000);
      });
    };
  }

  static passwordMatch(password: FormControl){
    return (control: FormControl): ValidationErrors| null => {
      console.log(password);
      
      if(password === control.value){
        return null;
      }
      else{
        return {passwordMatch : true}
      }
    }
  }
}
