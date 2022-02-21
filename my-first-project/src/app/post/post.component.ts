import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{


  @Input('img') postUrl = '';

  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called', this.postUrl);
  }

  ngOnChanges() {
    console.log('ngOnChanges() called');
  }

  ngOnInit() {
    console.log('ngOnInit() called', this.postUrl);
  }

  ngDoCheck() {
    console.log('ngDoCheck() called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() called');
  }
}
