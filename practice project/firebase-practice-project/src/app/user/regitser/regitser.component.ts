import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-regitser',
  templateUrl: './regitser.component.html',
  styleUrls: ['./regitser.component.css'],
})
export class RegitserComponent implements OnInit {
  registrationForm!: FormGroup;
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
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

    if (this.registrationForm.valid) {

      const { email, password } = this.registrationForm.value;

        try {
            this.authService.createUser(this.registrationForm.value);
        } catch (e) {
          console.error(e);
          return
        }
        alert('Success! Your account has been created');
    }
  }
}
