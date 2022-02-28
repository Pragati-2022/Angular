import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  //to take data from parent compoent list
  @Input() studentInfo =[ {
    firstName: '',
    lastName: '',
    gender: '',
    city: '',
    institute: '',
    description: '',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
