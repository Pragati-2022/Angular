import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/core/models/student';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  //to take data from parent compoent list
  @Input() studentsDetail! : Student;

  // output decorator to pass deatils of student
  @Output() oneStudentDetail =   new EventEmitter<Student>();

  constructor() {
   }

  ngOnInit(): void {
  }

  // called when click on info button and it store the details of that student and pass it to main component
  showStudentDetails() {
    this.oneStudentDetail.emit(this.studentsDetail);
  }
}
