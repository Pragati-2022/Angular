import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Student } from '../../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {

  // array of students to store different different student's object
  // students : any = [];

  studentDetailObj : Student = {
    firstName: '',
    lastName: '',
    gender: '',
    city: '',
    institute: '',
    description: ''
  };
  // viewchild decorators to take value of input fields
  @ViewChild('fname') studentFirstName!: ElementRef;
  @ViewChild('lname') studentLastName!: ElementRef;
  @ViewChild('genderf') studentGenderFemale!: ElementRef;
  @ViewChild('genderm') studentGenderMale!: ElementRef;
  @ViewChild('institue') studentInstitue!: ElementRef;
  @ViewChild('city') studentCity!: ElementRef;
  @ViewChild('description') studentDescription!: ElementRef;

  studentGender = '';

  @Output() oneStudentDetail =  new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // to give alert
  addedSuccessfully() {
    if (this.studentGenderFemale.nativeElement.checked) {
      this.studentGender = 'Female';
    } else if (this.studentGenderMale.nativeElement.checked) {
      this.studentGender = 'Male';
    }

    // condition for check that any feild is not empty and give alert related that
    if (
      this.studentFirstName.nativeElement.value &&
      this.studentLastName.nativeElement.value &&
      (this.studentGenderFemale.nativeElement.checked ||
        this.studentGenderMale.nativeElement.checked) &&
      this.studentInstitue.nativeElement.value &&
      this.studentCity.nativeElement.value &&
      this.studentDescription.nativeElement.value
    ) {

      this.studentDetailObj = {
        firstName: this.studentFirstName.nativeElement.value,
        lastName: this.studentLastName.nativeElement.value,
        gender: this.studentGender,
        institute: this.studentInstitue.nativeElement.value,
        city: this.studentCity.nativeElement.value,
        description: this.studentDescription.nativeElement.value,
      }

      alert('student added successfully');
      this.reset();
    } else {
      alert('Please enter required data');
    }
  }

  oneStudentDetails(data: any) {
    // assign it to studentInfo object
    this.oneStudentDetail.emit(data);
  }

  reset() {
    this.studentFirstName.nativeElement.value = '';
    this.studentLastName.nativeElement.value = '';
    this.studentGenderFemale.nativeElement.checked = false;
    this.studentGenderMale.nativeElement.checked = true;
    this.studentInstitue.nativeElement.value = '';
    this.studentCity.nativeElement.value = '';
    this.studentDescription.nativeElement.value = '';
  }
}
