import { Component, OnInit } from "@angular/core";
import { from, interval, Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  intervalSubscription: Subscription;

  constructor() {
    // map Ex - 1
    const intervalOperator$ = interval(1000);

    this.intervalSubscription = intervalOperator$
      .pipe(map((data) => "student " + data))
      .subscribe((res) => console.log(res));
    // this.intervalSubscription =  intervalObserval$.pipe(map(data => 3 * data)).subscribe((res) => console.log(res));

    setTimeout(() => {
      this.intervalSubscription.unsubscribe();
    }, 10000);

    //map Ex - 2
    const fromOperator$ = from([
      { id: 1, name: "paragti" },
      { id: 2, name: "sid" },
      { id: 3, name: "khushi" },
      { id: 4, name: "daxa" },
      { id: 5, name: "pari" },
    ]);

    fromOperator$
      .pipe(map((data) => data.name))
      .subscribe((res) => console.log(res));
  }

  ngOnInit() {}
}
