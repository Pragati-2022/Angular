import { Component, Input, OnInit} from '@angular/core';
import { Student } from '../../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() oneStudentDetail : Student ={
    firstName: '',
    lastName: '',
    gender: '',
    city: '',
    institute: '',
    description: ''
  }
  ngOnInit(): void {
  }

}
