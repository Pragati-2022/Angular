import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent implements OnInit {

  
  ngOnInit(){
      // setInterval(
      //   ()=> this.showModel= !this.showModel, 1000
      //   )
  }
  // title = 'practice-project';
  // cost = 2000;
  // price = 12.3;
  // pinkClass = false;
  // myFontSize = 20;
  // pizza = {
  //   topping : ['abc', 'xyz'],
  //   size : 'small'
  // };
  // imgUrl = 'https://picsum.photos/seed/picsum/200/300';
  // images =
  //   ['https://picsum.photos/seed/picsum/200/300',
  //   'https://picsum.photos/seed/picsum/200/300',
  //   'https://picsum.photos/seed/picsum/200/300'];

  // name = 'Hello Prarati!';
  // msg ;

  // constructor(private _testService: TestService){
  //     this.msg = this._testService.title;
  // }
}
