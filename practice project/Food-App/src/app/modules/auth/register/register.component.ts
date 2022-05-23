import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IUser } from '../../shared/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isFormSubmitted = false;
  user!: IUser;

  constructor(private authService: AuthService, private formBuilder: FormBuilder,
    private router : Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.registerForm = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      repeatPassword : ['', Validators.required],
    })
  }

  get _registerForm(){
    return this.registerForm.controls;
  }

  async onRegister(){
    this.isFormSubmitted = true;

    if(this.registerForm.valid){

      this.user = {
        name : this._registerForm['name'].value,
        email : this._registerForm['email'].value,
        password : this._registerForm['password'].value,
      }
      try{
        await this.authService.createUser(this.user);

        alert('successfully added!');

        this.router.navigate(['login']);
      } 
      catch(error){
        console.error(error);
        
        alert('error')
      }
    }
  }
}
