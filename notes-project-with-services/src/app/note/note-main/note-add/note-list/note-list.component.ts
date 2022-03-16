import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { INote } from "src/app/core/models/note";
import { NoteDetailService } from "src/app/core/services/note-detail.service";

@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.css"],
})
export class NoteListComponent implements OnInit {
  @Output() sendNoteId = new EventEmitter();

  constructor(private _noteDetailService: NoteDetailService) {}

  ngOnInit(): void {}

  //method to delete note
  onDelete(note) {
    this._noteDetailService.deleteNote(note);
  }

  //method to edit note
  onEdit(note: INote) {
    if (note.id != null && note.id != undefined && note.id != "") {
      this._noteDetailService.noteId = note.id;
      this.sendNoteId.emit(note.id);
    }
  }
}
