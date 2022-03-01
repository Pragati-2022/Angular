import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css'],
})
export class StudentMainComponent implements OnInit {
  // to store particular student details
  studentDetails : any;

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
