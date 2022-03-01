import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentModule } from '../student.module';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css'],
})
export class StudentMainComponent implements OnInit {
  // to store particular student details
  studentDetails : Student={
    firstName: '',
    lastName: '',
    gender: '',
    city: '',
    institute: '',
    description: ''
  };

  constructor() { }

  showStudent = false;
  // take details of student from list component
  showStudentDetails(data: any) {
    // assign it to studentInfo object
    this.showStudent = ! this.showStudent;
    this.studentDetails = data;
  }
  ngOnInit(): void {}
}
