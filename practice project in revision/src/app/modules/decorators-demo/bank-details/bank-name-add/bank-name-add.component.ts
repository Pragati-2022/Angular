import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegexUtility } from "src/app/core/utilities/regex.utility";
import { CustomValidators } from "src/app/core/validators/decorators-demo-validators/custom.validators";

@Component({
  selector: "app-bank-name-add",
  templateUrl: "./bank-name-add.component.html",
  providers: [RegexUtility]
})
export class BankNameAddComponent implements OnInit {
  addBankNameForm: FormGroup;
  isFormSubmitted = false;
  bankName = {};
  bankNames = [];

  @Output() sendBankNames = new EventEmitter();

  constructor(public formBuilder: FormBuilder, private regexUtility : RegexUtility) {
    this.bankNames = JSON.parse(localStorage.getItem("bankNames"));
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.addBankNameForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3),CustomValidators.uniqueBankName]],
      digits: [
        "",
        [
          Validators.required,
          Validators.min(6),
          Validators.max(16),
          Validators.pattern(this.regexUtility.pattern),
        ],
      ],
    });
  }

  get _addBankNameForm() {
    return this.addBankNameForm.controls;
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.addBankNameForm.valid) {
      this.bankName = {
        bankName: this._addBankNameForm.name.value,
        accountDigits: this._addBankNameForm.digits.value,
      };

      if (!this.bankNames) this.bankNames = [];

      this.bankNames.push(this.bankName);

      this.sendBankNames.emit(this.bankNames);

      localStorage.setItem("bankNames", JSON.stringify(this.bankNames));
    }
    this.initializeForm();
    this.isFormSubmitted = false;
  }
}
