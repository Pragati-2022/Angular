import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";

export class CustomValidators {
  static accountNumberDigits(bankName: number): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {
      console.log(bankName);

      let bankNames = JSON.parse(localStorage.getItem("bankNames"));

      let myBank = bankNames.find((e) => e.bankName === bankName);

      if (myBank) {
        if (control.value.length == myBank.accountDigits) {
          return null;
        } else {
          return { accountNumberDigits: true };
        }
      }
    };
  }

  static uniqueBankName(control: AbstractControl): ValidationErrors | null {
    let bankNames = JSON.parse(localStorage.getItem("bankNames"));

    let bankName = bankNames.find((e) => e.bankName == control.value);

    if (bankName) return { uniqueBankName: true };
    else return null;
  }
}
