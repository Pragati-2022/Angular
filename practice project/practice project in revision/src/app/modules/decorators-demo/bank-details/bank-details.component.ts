import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TouchSequence } from "selenium-webdriver";
import { IAccount } from "src/app/core/models/account";
import { BankDetailsService } from "src/app/core/services/decorators-demo/bank-details.service";
import { RegexUtility } from "src/app/core/utilities/regex.utility";
import { CustomValidators } from "src/app/core/validators/decorators-demo-validators/custom.validators";

@Component({
  selector: "app-bank-details",
  templateUrl: "./bank-details.component.html",
  providers: [RegexUtility]
})
export class BankDetailsComponent {
  accountDetail: IAccount;
  accountDetailForm: FormGroup;
  isFormSubmitted = false;
  isAddBankName = false;
  bankNames = JSON.parse(localStorage.getItem("bankNames"));
  accountNumberDigits = 0;

  constructor(public formBuilder: FormBuilder, private regexUtility : RegexUtility, private _bankDetailsService : BankDetailsService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.accountDetailForm = this.formBuilder.group({
      userName: ["", [Validators.required, Validators.minLength(3)]],
      bankName: ["", [Validators.required]],
      accountNumber: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      balance: ["", [Validators.required, Validators.min(1000)]],
    });
  }

  get _accountDetailForm() {
    return this.accountDetailForm.controls;
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.accountDetailForm.valid) {
      this.accountDetail = {
        userName: this._accountDetailForm.userName.value,
        bankName: this._accountDetailForm.bankName.value,
        accountNumber: this._accountDetailForm.accountNumber.value,
        balance: this._accountDetailForm.balance.value,
        totalAmount: function (this) {
          if(this.deposit && this.withdraw)
          return this.balance + this.deposit - this.withdraw;
          else if(this.deposit)
          return  this.balance + this.deposit ;
          else if(this.withdraw)
          return this.balance - this.withdraw;
          else
          return this.balance;
        },
      };
      
      console.log(this.accountDetail.totalAmount());

      this._bankDetailsService.addBankDetails(this.accountDetail);
    }
  }

  getBankNames(bankName){
    this.bankNames = bankName;
  }

  updateValidator() {
    if (this._accountDetailForm.bankName.value) {
      console.log(this._accountDetailForm.accountNumber.value.length);

      this._accountDetailForm.accountNumber.setValidators([
        Validators.required,
        Validators.pattern(this.regexUtility.pattern),
        CustomValidators.accountNumberDigits(
          this._accountDetailForm.bankName.value    
        ),
      ]);

      this._accountDetailForm.accountNumber.updateValueAndValidity();

      this.accountNumberDigits = this.bankNames.find((e) => e.bankName == (this._accountDetailForm.bankName.value))
    }
  }
}
