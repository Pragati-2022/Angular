import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-dec',
  templateUrl: './input-dec.component.html',
  styleUrls: ['./input-dec.component.css']
})
export class InputDecComponent implements OnInit {

  @Input() data: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
