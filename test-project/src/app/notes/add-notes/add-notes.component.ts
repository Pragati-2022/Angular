import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INote } from 'src/app/core/models/note';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  addNotesForm: FormGroup;
  formSubmitted = false;
  isEditAlert = false;
  isHidden = true;
  indexOfEdit;
  notesArray: INote[] = [];
  note: INote;
  noteStatus = false;
  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.addNotesForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(100)]],
      note: ["", [Validators.required, Validators.maxLength(1000)]],
      status: [""],
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

          if(this._addNotesForm.status.value){
            this.noteStatus = this._addNotesForm.status.value;
          }
          // to store product details in object
          this.note = {
            title: this._addNotesForm.title.value,
            note: this._addNotesForm.note.value,
            status: this.noteStatus,
          };

          // push product details in array
          this.notesArray.push(this.note);
          console.log(this.notesArray);
          
    } else {
      this.addNotesForm.markAsTouched();
    }
  }
  }
  editNoteData(){
    this.formSubmitted = true;

    if (this.addNotesForm.valid) {
     var ans =  confirm("Are you sure to edit this product?")
  
      if (ans) {
        
        if (this._addNotesForm.status.value) {
          this.noteStatus = this._addNotesForm.status.value
        }
    
        this.notesArray[this.indexOfEdit].title = this._addNotesForm.title.value; 
        this.notesArray[this.indexOfEdit].note = this._addNotesForm.note.value;
        this.notesArray[this.indexOfEdit].status = this.noteStatus;
  } else {
    this.addNotesForm.markAsTouched();
  }
  }
}

  deleteNote(index: number){
    this.notesArray.splice(index, 1);
  }

  editNote(index: number){
    // if(!this.notesArray[index].status)
    // {
console.log(this.notesArray[index].title);

    this.isHidden = false;
    console.log(this.addNotesForm.get("title").setValue(this.notesArray[index].title))
    this.addNotesForm.get("note").setValue(this.notesArray[index].note)
    this.addNotesForm.get("status").setValue(this.notesArray[index].status)
   
    this.indexOfEdit = index;
    // }
    // else{
    //   this.isEditAlert = true;
    //   alert("you can not edit");
    // }
  }
}
