import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map-practice',
  templateUrl: './merge-map-practice.component.html',
  styleUrls: ['./merge-map-practice.component.css']
})
export class MergeMapPracticeComponent implements OnInit {


  constructor() {
    const food = ['pizza', 'sandwich'];

    // from(food).pipe(map((data) => this.getMessage(data)), mergeAll()).subscribe(res => console.log(res));
    from(food).pipe(mergeMap((data) => this.getMessage(data))).subscribe(res => console.log(res));
   }

  ngOnInit() { }

  getMessage(msg){
    return of(msg + ' love it.')
  }
}
