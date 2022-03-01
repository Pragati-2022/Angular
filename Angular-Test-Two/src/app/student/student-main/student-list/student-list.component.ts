import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Student } from '../../../core/models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  
  // viewchild decorators to take value from user input
  @ViewChild('fname') studentFirstName!: ElementRef;
  @ViewChild('lname') studentLastName!: ElementRef;
  @ViewChild('genderf') studentGenderFemale!: ElementRef;
  @ViewChild('genderm') studentGenderMale!: ElementRef;
  @ViewChild('institue') studentInstitue!: ElementRef;
  @ViewChild('city') studentCity!: ElementRef;
  @ViewChild('description') studentDescription!: ElementRef;

  studentList : Student[] = [];
  studentGender = '';

  @Output() oneStudentDetail =  new EventEmitter<Student>();

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

      let studentDetailObj : Student = {
        firstName: this.studentFirstName.nativeElement.value,
        lastName: this.studentLastName.nativeElement.value,
        gender: this.studentGender,
        institute: this.studentInstitue.nativeElement.value,
        city: this.studentCity.nativeElement.value,
        description: this.studentDescription.nativeElement.value,
      }

      this.studentList.push(studentDetailObj);
      alert('student added successfully');
      this.reset();
    } else {
      alert('Please enter required data');
    }
  }

  oneStudentDetails(data: Student) {
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
  deleteStudent(index: number){
    this.studentList.splice(index, 1);
  }
}
