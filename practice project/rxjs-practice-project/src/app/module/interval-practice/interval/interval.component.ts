import { Component, OnInit } from "@angular/core";
import { interval, Observable, Subscription, timer } from "rxjs";

@Component({
  selector: "app-interval",
  templateUrl: "./interval.component.html",
})
export class IntervalComponent implements OnInit {
  intervalSubscription: Subscription;
  count = 0;
  timerCount = 0;

  constructor() {
    //interval
    const intervalObservable$ = interval(1000);

    this.intervalSubscription = intervalObservable$.subscribe({
      next: (value) => {
        if (value > 5) {
          this.intervalSubscription.unsubscribe();
        } else {
          // console.log(value);
        }
      },
      complete: () => {
        console.log("completed!");
      },
    });

    //custom interval
    const customIntervalObservable$ = new Observable((observer) => {
      setInterval(() => {
        observer.next(this.count++);
      }, 1000);
    });

    customIntervalObservable$.subscribe({
      next: (value) => {
        // console.log(value);
      },
    });

    //timer
    const timerObservable$ = timer(4000, 1000);

    timerObservable$.subscribe({
      next: (value) => {
        // console.log(value);
      },
    });

    //custom timer
    const customTimerObservable$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.timerCount);
        this.timerCount = this.timerCount + 1;

        setInterval(() => {
          observer.next(this.timerCount++);
        }, 1000);
      }, 4000);
    });

    customTimerObservable$.subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }

  ngOnInit() {}
}
