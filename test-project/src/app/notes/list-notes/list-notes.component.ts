import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from 'src/app/core/models/note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  noteArray: INote[] = [];
  noteForEdit: INote;

  getNotes(notes: INote[]) {
    this.noteArray = notes;
  }

  constructor() {
    this.noteArray = JSON.parse(localStorage.getItem('notes'));
  }

  ngOnInit(): void {}

  deleteNote(note) {
    if (note.status) {
      alert('you can not delete');
    } else {
      let deleteNoteData = this.noteArray.find((e) => e === note);
      console.log(deleteNoteData);

      let index = this.noteArray.indexOf(deleteNoteData);
      console.log(index);

      this.noteArray.splice(index, 1);

      localStorage.setItem('notes', JSON.stringify(this.noteArray));
    }
  }

  editNote(note: INote) {
    this.noteForEdit = note;
  }
}
