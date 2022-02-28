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
  @ViewChild('gender') studentGender!: ElementRef;
  @ViewChild('institue') studentInstitue!: ElementRef;
  @ViewChild('city') studentCity!: ElementRef;
  @ViewChild('description') studentDescription!: ElementRef;

  // output decorator to pass deatils of student
  @Output() studentDetailInfo: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // to give alert
  addedSuccessfully() {

    //push Student object to students array
    this.students.push({
      firstName: this.studentFirstName.nativeElement.value,
      lastName: this.studentLastName.nativeElement.value,
      gender: this.studentGender.nativeElement.value,
      institute: this.studentInstitue.nativeElement.value,
      city: this.studentCity.nativeElement.value,
      description: this.studentDescription.nativeElement.value,
    });

    // condition for check that any feild is not empty and give alert related that
    if (
      this.studentFirstName.nativeElement.value &&
      this.studentLastName.nativeElement.value &&
      this.studentGender.nativeElement.value &&
      this.studentInstitue.nativeElement.value &&
      this.studentCity.nativeElement.value &&
      this.studentDescription.nativeElement.value
    ) {
      alert('student added successfully');
    } else {
      alert('Please enter required data');
    }
  }

  // to delete particular student detail
  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  // called when click on info button and it store the details of that student and pass it to main component
  showData(i: number) {
    this.task = this.students[i];
    this.studentDetailInfo.emit(this.task);
  }
}
