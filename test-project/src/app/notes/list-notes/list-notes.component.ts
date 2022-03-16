import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from 'src/app/core/models/note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  noteArray: INote[];
  noteForEdit: INote;

  constructor() {
    this.noteArray = JSON.parse(localStorage.getItem('notes')) || [];
  }

  ngOnInit(): void {}

  //get notes form add-note componnet
  getNotes(notes: INote[]) {
    this.noteArray = notes;
  }

  //method to delete note
  deleteNote(note) {
    // if (note.status) {
    //   alert('you can not delete');
    // } else {
     
      // find index of note
      let index = this.noteArray.findIndex((e) => e === note)
      
      //condition for handle cases of null, undefined , -1
      if(index != null && index != undefined && index != -1){
      this.noteArray.splice(index, 1);

      //set upadetd array localstorage
      localStorage.setItem('notes', JSON.stringify(this.noteArray));
      }
    // } 
  }

  //method to edit note
  editNote(note: INote) {
    this.noteForEdit = note;
  }
}
