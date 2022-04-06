import { Component, OnInit } from "@angular/core";
import { fromEvent, Observable } from "rxjs";

@Component({
  selector: "app-from-event-practice",
  templateUrl: "./from-event-practice.component.html",
})
export class FromEventPracticeComponent implements OnInit {
  constructor() {

    //from event
    const fromEventObservable$ = fromEvent(document, "click");

    // fromEventObservable$.subscribe(console.log);
    fromEventObservable$.subscribe((res) => console.log(res));
  }

  ngOnInit() {

    //custom from event
    const myBtn = document.getElementById("myBtn");

    const customFromEvent$ = new Observable((observer) => {
      myBtn.addEventListener('click', () => {
        observer.next('Clicked!')
      })
    });

    customFromEvent$.subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }
}
