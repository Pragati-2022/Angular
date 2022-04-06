import { Component, OnInit } from "@angular/core";
import { from, interval, of } from "rxjs";
import { take, toArray } from "rxjs/operators";

@Component({
  selector: "app-to-array",
  templateUrl: "./to-array.component.html",
  styleUrls: ["./to-array.component.css"],
})
export class ToArrayComponent implements OnInit {
  persons = [
    { name: "pragati", age: "20" },
    { name: "sid", age: "19" },
    { name: "kuldeep", age: "21" },
  ];

  constructor() {
    //toArray Ex - 1
    const ofOperator$ = of(1, 2, 3, 1);

    ofOperator$.pipe(toArray()).subscribe((res) => console.log(res));

    //toArray Ex - 2
    const fromOperator$ = from(this.persons);

    fromOperator$.pipe(toArray()).subscribe({
      next: (value) => {
        console.log(value);
      },
    });

    //toArray Ex - 3
    const intervalOperator$ = interval(1000);

    intervalOperator$.pipe(take(6), toArray()).subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }

  ngOnInit() {}
}
  