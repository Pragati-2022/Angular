import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { INote } from 'src/app/core/models/note';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css'],
})
export class AddNotesComponent implements OnInit, OnChanges {
  addNotesForm: FormGroup;
  formSubmitted = false;

  @Input() getNoteForEdit: INote;
  @Output() sendNotes = new EventEmitter();

  note: INote;
  noteArray: INote[] = [];

  constructor(public fb: FormBuilder) {
    this.noteArray = JSON.parse(localStorage.getItem('notes')) ?? [];
  }

  ngOnInit() {
    this.initializeForm();
  }

  ngOnChanges(): void {
    if (this.getNoteForEdit) {
      this.addNotesForm.get('title').setValue(this.getNoteForEdit.title);
      this.addNotesForm.get('note').setValue(this.getNoteForEdit.note);
      this.addNotesForm.get('status').setValue(this.getNoteForEdit.status);
    }
  }

  // method for initialize form
  initializeForm() {
    this.addNotesForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      note: ['', [Validators.required, Validators.maxLength(1000)]],
      status: [''],
    });
  }

  // get form controls
  get _addNotesForm() {
    return this.addNotesForm.controls;
  }

  // method to add or edit note
  onSubmit() {
    if (this.getNoteForEdit) {
      // edit
      this.formSubmitted = true;

      if (this.addNotesForm.valid) {

        //find edit note index
        let index = this.noteArray.findIndex(
          (e) => e.id === this.getNoteForEdit.id
        );
        // condition for handle cases of null, undefined , -1
        if (index != null && index != undefined && index != -1) {
          this.noteArray[index].title = this._addNotesForm.title.value;
          this.noteArray[index].note = this._addNotesForm.note.value;
          this.noteArray[index].status = this._addNotesForm.status.value;
          this.noteArray[index].date = new Date();

          //sort note by date
          this.noteArray.sort((D1, D2) => {
            return <any>new Date(D2.date) - <any>new Date(D1.date);
          });

          this.sendNotes.emit(this.noteArray);
          //set notes array to localstorage
          localStorage.setItem('notes', JSON.stringify(this.noteArray));

          this.clearForm();
        }
      } else {
        this.addNotesForm.markAsTouched();
      }
    } else {
      // add
      this.formSubmitted = true;
      if (this.addNotesForm.valid) {
        var answer = confirm('Are you sure to add this note?');
        if (answer) {
          if (!this.noteArray) this.noteArray = [];
          // store note value in object
          this.note = {
            id: UUID.UUID(),
            title: this._addNotesForm.title.value,
            note: this._addNotesForm.note.value,
            status: this._addNotesForm.status.value,
            date: new Date(),
          };

          //push that obj and sort by date
          this.noteArray.push(this.note);
          this.noteArray.sort((D1, D2) => {
            return <any>new Date(D2.date) - <any>new Date(D1.date);
          });
          this.sendNotes.emit(this.noteArray);

          //set updated note array in localstorage
          localStorage.setItem('notes', JSON.stringify(this.noteArray));
          // this.noteArray = JSON.parse(localStorage.getItem('notes'))?? [];

          this.clearForm();
        } else {
          this.addNotesForm.markAsTouched();
        }
      }
    }
  }

  //method to clear form
  clearForm() {
    this.initializeForm();
    this.formSubmitted = false;
    this.getNoteForEdit = null;
  }
}
