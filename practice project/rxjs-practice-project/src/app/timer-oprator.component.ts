import { Component } from "@angular/core";
import { interval, timer, fromEvent, of, from } from "rxjs";

@Component({
  selector: "app-timer-oprator",
  template: "",
})
export class TimerOpratorComponent {

  constructor() {
    // const observable = interval(1000);
    // const observable = timer(0, 1000);
    // const observable = fromEvent(
    //     document, 'click'
    // );
    // const observable = of(1,2,3,4,5);
    // const observable = of([1,2,3,4,5]);
    // const observable = from([1,2,3,4]);
    // const observable = from('pragati');

    // const subcription = observable.subscribe(
    //     console.log
    // ) 

    // setInterval(() => {
    //     subcription.unsubscribe();
    // }, 5000);

    const observable = from(fetch('https://jsonplaceholder.typicode.com/posts'));

    const subcription = observable.subscribe({
        next: (value) => {
            console.log(value);
          },
        complete: () => {
            console.log('complete'); 
        }
    })

    console.log('Hello');
  }
}
