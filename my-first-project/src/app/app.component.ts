import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-project';
  name = 'pragati sanepara';
  imgUrl = 'https://picsum.photos/id/237/200/300';
  disable = true;
  enterName = 'siddh';
  parentData = '';
  value = '';

  constructor(){

  }

  changeData(event : string){
    this.enterName = event;
  }
  transferData(){
    this.parentData = this.enterName;
    console.log(this.enterName);
  }

  sendData(value: string){
    this.value = value;
  }

  onClick(){
    this.disable = false;
  }

  getName() {
    return this.name;
  }

  getMyName(myName : string) {
    alert(myName)
  }

  myEvent(event: string | number){
    console.warn(event);

  }

  changeURL(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
