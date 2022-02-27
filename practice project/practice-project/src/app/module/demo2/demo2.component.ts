import { Component, OnInit } from '@angular/core';
import { NumlistService } from 'src/app/services/numlist.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  // providers:[NumlistService]
})
export class Demo2Component implements OnInit {
  numList2 : number[];

  constructor(private _numlistService : NumlistService) {}
  ngOnInit(): void {     
    this.numList2= this._numlistService.getNumber();
  }

  addNumber(num: number){
    this._numlistService.addNumber(num);
    this.numList2= this._numlistService.getNumber();
    
  }
}
