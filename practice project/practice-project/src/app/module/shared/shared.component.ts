import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
  providers:[TestService]
})
export class SharedComponent implements OnInit {
  wlc = 'wellcome to cybercom creation';
  mess;
  otherMsg;

  constructor(private _testService: TestService){
    // this.mess= this._testService.title;
  }

  ngOnInit(){
  }

  getMassage(){
        this.mess= this._testService.title;
        this.otherMsg = this._testService.getOtherMsg();
  }
}
