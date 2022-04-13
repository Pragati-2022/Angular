import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmailTaken } from 'src/app/core/validators/email-taken';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegitserComponent implements OnInit {
  registrationForm!: FormGroup;
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private EmailTaken : EmailTaken
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email], [this.EmailTaken.validate]],
      password: ['', Validators.required],
      userName: ['', Validators.required],
      age: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  get _registrationForm() {
    return this.registrationForm.controls;
  }

  async onRegister() {
    this.isFormSubmitted = true;
    console.log(this._registrationForm['email'].errors?.['EmailTaken']);


    if (this.registrationForm.valid) {

      const { email, password } = this.registrationForm.value;

        try {
            await this.authService.createUser(this.registrationForm.value);
            alert('Success! Your account has been created');
        } catch (e) {
          alert('error!');
          console.error(e);
          return
        }
    }
  }
}
