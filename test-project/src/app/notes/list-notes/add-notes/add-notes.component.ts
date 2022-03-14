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

  isEditAlert = false;
  note: INote;
  noteArray: INote[] = [];

  constructor(public fb: FormBuilder) {
    console.log('constroctor');
    this.noteArray = JSON.parse(localStorage.getItem('notes'));
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

  initializeForm() {
    this.addNotesForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      note: ['', [Validators.required, Validators.maxLength(1000)]],
      status: [''],
    });
  }

  get _addNotesForm() {
    return this.addNotesForm.controls;
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log(this.addNotesForm);

    if (this.addNotesForm.valid) {
      var answer = confirm('Are you sure to add this product?');
      if (answer) {
        // to store note details in object
        if (!this.noteArray) this.noteArray = [];
        this.note = {
          id: UUID.UUID(),
          title: this._addNotesForm.title.value,
          note: this._addNotesForm.note.value,
          status: this._addNotesForm.status.value,
          date: new Date(),
        };

        this.noteArray.unshift(this.note);
        this.sendNotes.emit(this.noteArray);
        localStorage.setItem('notes', JSON.stringify(this.noteArray));
        this.noteArray = JSON.parse(localStorage.getItem('notes'));

        this.clearForm();
      } else {
        this.addNotesForm.markAsTouched();
      }
    }
  }

  editNote() {
    this.formSubmitted = true;

    if (this.addNotesForm.valid) {
      this.getNoteForEdit.id;

      let index = this.noteArray.findIndex(
        (e) => e.id === this.getNoteForEdit.id
      );
      console.log(index);

      this.noteArray[index].title = this._addNotesForm.title.value;
      this.noteArray[index].note = this._addNotesForm.note.value;
      this.noteArray[index].status = this._addNotesForm.status.value;
      this.noteArray[index].date = new Date();

      this.noteArray.sort((D1, D2) => {
        return <any>new Date(D2.date) - <any>new Date(D1.date);
      });

      this.sendNotes.emit(this.noteArray);
      
      localStorage.setItem('notes', JSON.stringify(this.noteArray));

      this.clearForm();
    } else {
      this.addNotesForm.markAsTouched();
    }
  }

  clearForm() {
    this.initializeForm();
    this.formSubmitted = false;
    this.getNoteForEdit = null;
  }
}
