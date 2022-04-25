import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomValidators } from 'src/app/core/validators/custom-validators';
import { EmailTaken } from 'src/app/core/validators/email-taken';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [CustomValidators],
})
export class RegitserComponent implements OnInit {
  registrationForm!: FormGroup;
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private EmailTaken : EmailTaken,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.registrationForm.errors?.['match']);
  }

  initializeForm() {
    this.registrationForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email], [this.EmailTaken.validate]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      userName: ['', Validators.required],
      age: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    },{ 
      validator: CustomValidators.match
    });
  } 

  get _registrationForm() {
    return this.registrationForm.controls;
  }

  async onRegister() {
    this.isFormSubmitted = true;

    console.log(this.registrationForm.errors?.['match']);

    if (this.registrationForm.valid) {

      const { email, password } = this.registrationForm.value;

        try {
            await this.authService.createUser(this.registrationForm.value);
            alert('Success! Your account has been created');

            this.router.navigate(['login']);
        } catch (e) {
          alert('error!');
          console.error(e);
          return
        }
    }
  }
}
