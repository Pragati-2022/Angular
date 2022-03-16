import { JsonPipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { INote } from "../models/note";

@Injectable({
  providedIn: "root",
})
export class NoteDetailService {
  noteArray: INote[];
  noteId = '';  

  constructor() {
    this.noteArray = JSON.parse(localStorage.getItem("note"));
  }

  //sort and set array to localstorage
  setNote() {
    this.noteArray.sort((D1, D2) => {
      return <any>new Date(D2.date) - <any>new Date(D1.date);
    });

    localStorage.setItem("note", JSON.stringify(this.noteArray));
  }

// #region  -------- CRUD OPARATION --------

  //Add
  addNote(note: INote) {
    var answer = confirm("Are you sure to add this note?");
    if (answer) {
      if (!this.noteArray) this.noteArray = [];

      //push that obj and sort by date
      this.noteArray.push(note);

      //set updated note array in localstorage and sort
      this.setNote();
    }
  }

  //Edit
  editNote(addNotesForm) {
    // find edit note index
    let index = this.noteArray.findIndex((e) => e.id === this.noteId);
    // condition for handle cases of null, undefined , -1
    if (index != null && index != undefined && index != -1) {
      this.noteArray[index].title = addNotesForm.title.value;
      this.noteArray[index].note = addNotesForm.note.value;
      this.noteArray[index].status = addNotesForm.status.value;
      this.noteArray[index].date = new Date();

      //set updated note array in localstorage and sort
      this.setNote();
    } else {
      alert("data not available");
    }
  }

  //Delete
  deleteNote(note: INote) {
    let index = this.noteArray.findIndex((e) => e === note);

    //condition for handle cases of null, undefined , -1
    if (index != null && index != undefined && index != -1) {
      this.noteArray.splice(index, 1);

      //set upadetd array localstorage
      this.setNote();
    }
  }

// #endregion  -------- CRUD OPARATION --------
}
