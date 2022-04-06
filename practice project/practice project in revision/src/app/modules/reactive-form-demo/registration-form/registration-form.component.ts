import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { CustomValidator } from "src/app/core/validators/custom.validator";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
})
export class RegistrationFormComponent implements OnInit {
  //by FormControl & FormGroup
  registrationForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  get _registrationForm() {
    // console.log(this.registrationForm);
    return this.registrationForm.controls;
  }

  //by FormBuilder
  registrationForm2: FormGroup;
  userNames = ['pragtai', 'siddh', 'mihir', 'khushi'];
  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm2 = this.formBuilder.group({
      userName: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          CustomValidator.cannotContainSpace],
          [CustomValidator.shouldBeUnique(this.userNames)],
      ],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmPassword: ["", [Validators.required]],
    });
  }

  get _registrationForm2() {
    return this.registrationForm2.controls;
  }
}
