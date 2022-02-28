import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

// interface of student to store all students details
interface Student {
  firstName: string;
  lastName: string;
  gender: string;
  city: string;
  institute: string;
  description: string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit, Student {
  // to implement Student interface
  firstName!: string;
  lastName!: string;
  gender!: string;
  city!: string;
  institute!: string;
  description!: string;
  shoWStudent = false;

  // to store one student details which is pass to main component
  task = {};

  // array of students to store different different student's object
  students: Student[] = [];

  // viewchild decorators to take value of input fields
  @ViewChild('fname') studentFirstName!: ElementRef;
  @ViewChild('lname') studentLastName!: ElementRef;
  @ViewChild('genderf') studentGenderFemale!: ElementRef;
  @ViewChild('genderm') studentGenderMale!: ElementRef;
  @ViewChild('institue') studentInstitue!: ElementRef;
  @ViewChild('city') studentCity!: ElementRef;
  @ViewChild('description') studentDescription!: ElementRef;

  studentGender = '';
  deletedIndex!: number;
  // output decorator to pass deatils of student
  @Output() studentDetailInfo: EventEmitter<any> = new EventEmitter();

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
      //push Student object to students array
      this.students.push({
        firstName: this.studentFirstName.nativeElement.value,
        lastName: this.studentLastName.nativeElement.value,
        gender: this.studentGender,
        institute: this.studentInstitue.nativeElement.value,
        city: this.studentCity.nativeElement.value,
        description: this.studentDescription.nativeElement.value,
      });

      alert('student added successfully');
      this.reset();
    } else {
      alert('Please enter required data');
    }
  }

  // to delete particular student detail
  deleteStudent(index: number) {
    this.students.splice(index, 1);
    if(this.deletedIndex)
    this.showData(index);
  }

  // called when click on info button and it store the details of that student and pass it to main component
  showData(i: number) {
    this.deletedIndex = i;
    this.task = this.students[i];
    this.studentDetailInfo.emit(this.task);
  }

  reset() {
    this.studentFirstName.nativeElement.value = '';
    this.studentLastName.nativeElement.value = '';
    this.studentGenderFemale.nativeElement.checked = false;
    this.studentGenderMale.nativeElement.checked = false;
    this.studentInstitue.nativeElement.value = '';
    this.studentCity.nativeElement.value = '';
    this.studentDescription.nativeElement.value = '';
  }
}
