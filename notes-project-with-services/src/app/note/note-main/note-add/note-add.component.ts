import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UUID } from "angular2-uuid";
import { INote } from "src/app/core/models/note";
import { NoteDetailService } from "src/app/core/services/note-detail.service";

@Component({
  selector: "app-note-add",
  templateUrl: "./note-add.component.html",
  styleUrls: ["./note-add.component.css"],
})
export class NoteAddComponent implements OnInit {
  addNotesForm: FormGroup;
  formSubmitted = false;
  note: INote;

  constructor(
    public fb: FormBuilder,
    private _noteDetailService: NoteDetailService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  // method for initialize form
  initializeForm() {
    this.addNotesForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(100)]],
      note: ["", [Validators.required, Validators.maxLength(1000)]],
      status: [""],
    });
  }

  // get form controls
  get _addNotesForm() {
    return this.addNotesForm.controls;
  }

  // method to add or edit note
  onSubmit() {
    //condition for validation
    this.formSubmitted = true;
    if (this.addNotesForm.valid) {
      // edit
      if (this._noteDetailService.noteId) {
        this._noteDetailService.editNote(this._addNotesForm);
        this.clearForm();
      } else {
        // store note value in object
        this.note = {
          id: UUID.UUID(),
          title: this._addNotesForm.title.value,
          note: this._addNotesForm.note.value,
          status: this._addNotesForm.status.value,
          date: new Date(),
        };

        // add
        this._noteDetailService.addNote(this.note);
        this.clearForm();
      }
    } else {
      this.addNotesForm.markAsTouched();
    }
  }

  //get id which we want to edit
  getNoteId(id) {
    let editNote = this._noteDetailService.noteArray.find((e) => e.id === id);
    if (editNote) {
      this.addNotesForm.get("title").setValue(editNote.title);
      this.addNotesForm.get("note").setValue(editNote.note);
      this.addNotesForm.get("status").setValue(editNote.status);

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  //method to clear form
  clearForm() {
    this.initializeForm();
    this.formSubmitted = false;
    this._noteDetailService.noteId = null;
  }
}
