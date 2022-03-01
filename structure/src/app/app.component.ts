import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'structure';

  @ViewChild('name') userName : ElementRef;
  @ViewChild('city') userCity : ElementRef;
  user = [];
  constructor() { }
  addUser(): void {
    if(this.userName.nativeElement.value && this.userCity.nativeElement.value){
      this.user.push({Name: this.userName.nativeElement.value, City: this.userCity.nativeElement.value})
      alert('success');
    }
    else{
      alert('not valid');
    }
  } 
}
