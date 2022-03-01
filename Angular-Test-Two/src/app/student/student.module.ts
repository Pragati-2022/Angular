import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-main/student-details/student-details.component';
import { StudentListComponent } from './student-main/student-list/student-list.component';
import { StudentInfoComponent } from './student-main/student-list/student-info/student-info.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { PrependNamePipe } from '../core/pipe/prepend-name.pipe';

@NgModule({
  declarations: [
    StudentDetailsComponent,
    StudentListComponent,
    StudentInfoComponent,
    StudentMainComponent,
    PrependNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [StudentDetailsComponent, StudentListComponent, StudentInfoComponent, StudentMainComponent, PrependNamePipe]
})
export class StudentModule { }
