import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmailTaken } from '../../shared/custom-validators/email-taken';
import { RegistrationValidator } from '../../shared/custom-validators/registration.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _emailTaken : EmailTaken
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email], [this._emailTaken.validate]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipCode: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    },
    { 
      validator: RegistrationValidator.match('password', 'confirmPassword')
    });
  }

  get _registrationForm() {
    return this.registrationForm.controls;
  }

  onRegister() {
    this.isFormSubmitted = true;

    if (this.registrationForm.valid) {

      try{
        this._authService.createUser(this.registrationForm.value);
        alert('you have successfully registred.')
      }
      catch(e){
        alert('Error occurr!');
        console.log(e);
      }     
    }  
  }
}
