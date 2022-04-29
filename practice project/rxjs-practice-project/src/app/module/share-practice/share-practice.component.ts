import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, publish, refCount, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/core/model/todo';

@Component({
  selector: 'app-share-practice',
  templateUrl: './share-practice.component.html',
  styleUrls: ['./share-practice.component.css']
})
export class SharePracticeComponent implements OnInit {

  todos$: Observable<any>;
  id$: Observable<number>;
  title$: Observable<string>;
  
  constructor(private httpClient : HttpClient) { 
    this.todos$ = this.httpClient.get('https://jsonplaceholder.typicode.com/todos/2').pipe(
      // share()
      publish(),
      refCount()
    );

    this.id$ = this.todos$.pipe(map(todo => todo.id));
    this.title$ = this.todos$.pipe(map(todo => todo.title));
  }

  ngOnInit() {
  }

}
