import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestService],
})
export class TestComponent{
  
  time = new Date();
  private interval : number;
  constructor() {
   }

   ngOnInit(){
    this.interval= window.setInterval(()=>{
      this.time = new Date();
      console.log(this.time);
      console.log(this.interval);
    }, 1000)
   }

   ngOnDestroy(){
    clearInterval(this.interval);
  }
}

