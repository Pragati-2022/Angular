import { Component, Input, OnInit } from '@angular/core';
import { INote } from 'src/app/core/models/note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  @Input() noteDetails: INote;

  constructor() { }

  ngOnInit(): void {
  }

}
