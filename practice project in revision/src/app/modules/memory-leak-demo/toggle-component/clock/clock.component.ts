import { Component } from "@angular/core";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
})
export class ClockComponent {
  time = new Date();
  interval: number;
  constructor() {}

  ngOnInit() {
    this.interval = window.setInterval(() => {
      this.time = new Date();
      console.log(this.time);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
