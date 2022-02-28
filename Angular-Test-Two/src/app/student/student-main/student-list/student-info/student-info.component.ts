import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  @Input() studentInfo =[ {
    firstName: 'pragati',
    lastName: 'sanepara',
    gender: 'Female',
    city: 'amreli',
    institute: 'B.H.Gardi',
    description: 'I am student.',
  }];

  task = {};

  @Output() studentDetail : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
//   deleteStudent(index: number){
//     // console.log(this.userInfo[index]);
//     this.studentInfo.splice(index, 1);
//   }

//   showData(i : number){
//     this.task = this.studentInfo[i];
//     this.studentDetail.emit(this.task);
//  } 

}
