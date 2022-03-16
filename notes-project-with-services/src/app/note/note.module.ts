import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteAddComponent } from './note-main/note-add/note-add.component';
import { NoteListComponent } from './note-main/note-add/note-list/note-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NoteAddComponent, NoteListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [NoteAddComponent, NoteListComponent],
})
export class NoteModule { }
