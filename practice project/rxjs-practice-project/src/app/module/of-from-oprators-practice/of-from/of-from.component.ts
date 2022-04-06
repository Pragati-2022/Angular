import { Component, OnInit } from "@angular/core";
import { from, of } from "rxjs";

@Component({
  selector: "app-of-from",
  templateUrl: "./of-from.component.html",
  styleUrls: ["./of-from.component.css"],
})
export class OfFromComponent implements OnInit {
  constructor() {
    //of
    const ofOperator$ = of("123,456");
    // const ofOprator$ = of("pragati");
    // const ofOprator$ = of(123456);
    // const ofOprator$ = of(1,2,3,4,5,6);
    // const ofOprator$ = of([1,2,3,4,5,6]);
    // const ofOprator$ = of(1,2,3,4,5,'pragati');
    // const ofOprator$ = of([1,2,3,4,5,'pragati']);
    // const ofOprator$ = of({1 :1,2:2,3:3,4:4,5:5,6:'pragati'}, 9);
    // const ofOprator$ = of({1 :1,2:2,3:3,4:4,5:5,6:'pragati'}, null, 7, undefined);

    ofOperator$.subscribe({
      next: (value) => {
        console.log(value);
      },
      complete: () => {
        console.log("completed!");
      },
    });

    //from
    // const fromOeprator$ = from('pragati');
    const fromOeprator$ = from([1,2,3,4]);
    // const fromOeprator$ = from({1:1,2:2,3:3,4:4}); // not allow object it allow only Iterable like string, array

    fromOeprator$.subscribe({
      next: (value) => {
        console.log(value);
      }
    })
  }

  ngOnInit() {}
}
