import { Component } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "rxjs-practice-project";

  constructor() {
    const firstObservable$ = new Observable((observer) => {
      observer.next("Hello Sanepara");

      observer.error("Error!");
      observer.next("Hello Pragati");

      observer.complete();
      observer.next("Hello Sid");
    });

    firstObservable$.subscribe({
      next: (value: string) => {
        console.log(value);
      },
      complete: () => {
        console.warn("complete call!");
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
