import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent implements OnInit {

  // to store particular student details
  studentInfo = {};
  constructor() { }

  // take details of student from list component
  showData(data: any){
    // assign it to studentInfo object
    this.studentInfo = data;
  }
  ngOnInit(): void {
  }

}
