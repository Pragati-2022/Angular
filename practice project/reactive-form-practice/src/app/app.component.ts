import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "reactive-form-practice";

  username = new FormControl(null, [
    Validators.required,
    Validators.minLength(3),
  ]);
  email = new FormControl(null, [Validators.required, Validators.email]);
  age = new FormControl(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(100),
  ]);
  password = new FormControl(null, [
    Validators.required,
    Validators.pattern("[0-9]{6}"),
  ]);
  phoneNumber = new FormControl(null, [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13),
  ]);

  ngOnInit() {}
  signUpForm = new FormGroup({
    username: this.username,
    email: this.email,
    age: this.age,
    password: this.password,
    phoneNumber : this.phoneNumber,
  });
}
