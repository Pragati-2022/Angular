import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-main/student-deatils/student-details.component';
import { StudentListComponent } from './student-main/student-list/student-list.component';
import { StudentInfoComponent } from './student-main/student-list/student-info/student-info.component';
import { StudentMainComponent } from './student-main/student-main.component';

@NgModule({
  declarations: [
    StudentDetailsComponent,
    StudentListComponent,
    StudentInfoComponent,
    StudentMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StudentDetailsComponent, StudentListComponent, StudentInfoComponent, StudentMainComponent]
})
export class StudentModule { }
