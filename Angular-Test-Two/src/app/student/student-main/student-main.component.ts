import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent implements OnInit {

  studentInfo = {};
  constructor() { }

  showData(data: any){
    this.studentInfo = data;
  }
  ngOnInit(): void {
  }

}
