import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { OfficeComponent } from '../office/office.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  message: string | undefined;
  @Input() parentData : string | undefined;

  @Output() sendData = new EventEmitter<string>();

  @ViewChild(OfficeComponent) childData!: OfficeComponent;

  constructor() { }

  ngOnInit(){
  }

  ngAfterViewInit(){
    this.message = this.childData.childVar;
  }
}
