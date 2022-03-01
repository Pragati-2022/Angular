import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  //to take data from parent compoent list
  @Input() studentsDetail : any =[];

  // output decorator to pass deatils of student
  @Output() oneStudentDetail =   new EventEmitter();

  task = {};
  constructor() { }

  ngOnInit(): void {
  }

  // to delete particular student detail
  deleteStudent(index: number) {
    this.studentsDetail.splice(index, 1);
  }

  // called when click on info button and it store the details of that student and pass it to main component
  showStudentDetails(i: number) {
    this.task = this.studentsDetail[i];
    this.oneStudentDetail.emit(this.task);
  }
}
