import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get _loginForm() {
    return this.loginForm.controls;
  }
  
  async onSubmit() {
    this.isFormSubmitted = true;

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      try {
        await this._authService.login(email, password);
        alert('you have successfully logged in!');
        this.router.navigate(['home'])
      } catch (e) {
        alert('error');
        console.error(e);
        return;
      }
    }
  }
}
