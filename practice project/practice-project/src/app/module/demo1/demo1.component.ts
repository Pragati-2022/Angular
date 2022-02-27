import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  //   providers:[NumlistService]
})
export class Demo1Component implements OnInit {
  Student = [];
  //   numList1 =[];

  //   constructor(private _numlistService: NumlistService) {}
  ngOnInit(): void {
    // this.numList1 = this._numlistService.getNumber();
  }

  //   addNumber(num: number) {
  //     this._numlistService.addNumber(num);
  //     this.numList1 = this._numlistService.getNumber();
  //   }
  addNumberEvent(val: number, name: string) {
    this.Student.push({ name: name, num: val });
  }
}
