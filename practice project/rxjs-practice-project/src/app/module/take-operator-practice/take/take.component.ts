import { Component, OnInit } from "@angular/core";
import { from, fromEvent, interval, of, timer } from "rxjs";
import { last, skip, skipLast, skipUntil, skipWhile, take, takeLast, takeUntil, takeWhile } from "rxjs/operators";

@Component({
  selector: "app-take",
  templateUrl: "./take.component.html",
  styleUrls: ["./take.component.css"],
})
export class TakeComponent implements OnInit {
  constructor() {
    const ofOperator$ = of(1, 2, 3, 5, 6, 7, 8);
    const fromOperator$ = from([1, 2, 'ddd', 5, 6, 7, 'pragati']);
    const intervalOperator$ = interval(1000);
    const timerOperator$ = timer(7000);
    const fromEventOperator$ = fromEvent(document, 'click');

    //take
    // ofOperator$.pipe(take(2)).subscribe((res) => console.log(res)); //1,2

    // //take last
    // ofOperator$.pipe(takeLast(2)).subscribe((res) => console.log(res)); //7,8

    // //take until
    // intervalOperator$
    //   .pipe(takeUntil(timerOperator$))
    //   .subscribe((res) => console.log(res)); //0,1,2,3,4,5

    //take while
    // intervalOperator$
    //   .pipe(takeWhile((x) => x <= 9))
    //   .subscribe((res) => console.log(res)); //0,1,2,3,4,5,6,7,8,9
    // ofOperator$
    //   .pipe(takeWhile((x) => x <= 4))
    //   .subscribe((res) => console.log(res)); //1,2,3
    // ofOperator$
    //   .pipe(takeWhile((x) => x <= 4, true))
    //   .subscribe((res) => console.log(res)); //1,2,3,5 - taek one false value

    //skip
    // ofOperator$.pipe(skip(3)).subscribe((res) => console.log(res));
    // intervalOperator$.pipe(skip(3)).subscribe((res) => console.log(res));
    

    //last
    // ofOperator$.pipe(last()).subscribe(console.log);
    // fromOperator$.pipe(last()).subscribe(res => console.log(`last name : ` + res));
    // timerOperator$.pipe(last()).subscribe(res => console.log(`last number : ` + res));
    // fromOperator$.pipe(last(x => x === 'pragati' , 'is  not exist')).subscribe(res => console.log(`last name : ` + res));
    // fromOperator$.pipe(last(x => x === 'sid' , 'is  not exist')).subscribe(res => console.log(`last name : ` + res));
    // ofOperator$.pipe(last(x => x === 6, 'not exist')).subscribe(console.log); //if is exist but not last then it will print
    // ofOperator$.pipe(last(x => x === 8, 'not exist')).subscribe(console.log);

    //skip until
    // intervalOperator$.pipe(skipUntil(timerOperator$)).subscribe(res => console.log(res));
    // intervalOperator$.pipe(skipUntil(fromEventOperator$)).subscribe(res => console.log(res));

    //skip last
    // ofOperator$.pipe(skipLast(2)).subscribe(console.log);
    // fromOperator$.pipe(skipLast(2)).subscribe(console.log);

    // skip while
    // ofOperator$.pipe(skipWhile(x => x < 3)).subscribe(console.log); //3,5,6,7,8
    // fromOperator$.pipe(skipWhile(x => x < 4)).subscribe(console.log); // ddd, 5,6,7, pragati
    // fromOperator$.pipe(skipWhile(x => x !== 5)).subscribe(console.log); //5,6,7,pragati
    // fromOperator$.pipe(skipWhile((_, x) => x !== 5)).subscribe(console.log); //7,pragati
    // intervalOperator$.pipe(skipWhile(x => x < 4)).subscribe(console.log); // 4,5,6,7,8,9,...

  }
  ngOnInit() {}
}
