import { Component , ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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
export class StudentListComponent implements OnInit, Student{
  firstName!: string;
  lastName!: string;
  gender!: string;
  city!: string;
  institute!: string;
  description!: string;
  // gender = '';
  shoWStudent = false;
  task = {};

  students: Student[] =[];

  @ViewChild('fname') studentFirstName!: ElementRef;
  @ViewChild('lname') studentLastName!: ElementRef;
  @ViewChild('gender') studentGender!: ElementRef;
  @ViewChild('institue') studentInstitue!: ElementRef;
  @ViewChild('city') studentCity!: ElementRef;
  @ViewChild('description') studentDescription!: ElementRef;

  @Output() studentDetailInfo : EventEmitter<any> = new EventEmitter();
  
  constructor() { 
  }

  ngOnInit(): void {}

  addedSuccessfully(){

    if(this.studentFirstName.nativeElement.value && this.studentLastName.nativeElement.value && this.studentGender.nativeElement.value && this.studentInstitue.nativeElement.value && this.studentCity.nativeElement.value && this.studentDescription.nativeElement.value)
    {
      this.students.push({firstName : this.studentFirstName.nativeElement.value, lastName : this.studentLastName.nativeElement.value, gender :this.studentGender.nativeElement.value, institute: this.studentInstitue.nativeElement.value, city: this.studentCity.nativeElement.value , description :  this.studentDescription.nativeElement.value})      
      alert("student added successfully");
    }
    else{
      alert("Please enter required data");
    }
  }


  deleteStudent(index: number){
    this.students.splice(index, 1);
  }

  showData(i : number){
    this.task = this.students[i];
    this.studentDetailInfo.emit(this.task); 
 } 
 
  //   storeGenderM(gen: string) {
  //   this.gender = gen;
  //   console.log(this.gender);
  // }
  // storeGenderF(gen: string) {
  //   this.gender = gen;
  //   console.log(this.gender);
  // }
}


