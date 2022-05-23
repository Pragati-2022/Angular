import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  isFormSubmitted = false;

  constructor(private authService: AuthService,
    private router : Router) {
    console.log(this.loginForm);
  }
  
  ngOnInit(): void {}

  onSignIn() {
    this.isFormSubmitted = true;

    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value
      );

      this.router.navigate(['']);
    } else {  
      alert('error');
    }
  }
}
