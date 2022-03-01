import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/student/student';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit , OnChanges{

  //to take data from parent compoent list
  @Input() studentsDetail : Student ={
    firstName: '',
    lastName: '',
    gender: '',
    city: '',
    institute: '',
    description: ''
  };

  students : any = [];

  // output decorator to pass deatils of student
  @Output() oneStudentDetail =   new EventEmitter();

  task =[];

  constructor() {
   }

  ngOnInit(): void {
  }

  ngOnChanges(){
    // this.task = this.studentsDetail;
    if(this.studentsDetail.firstName)
    this.students.push(this.studentsDetail);
    console.log(this.students);
  }

  // to delete particular student detail
  deleteStudent(index: number) {
    this.students.splice(index, 1);
    console.log(this.students);
  }

  // called when click on info button and it store the details of that student and pass it to main component
  showStudentDetails(index: number) {
    this.task = this.students[index];
    this.oneStudentDetail.emit(this.task);
  }
}
