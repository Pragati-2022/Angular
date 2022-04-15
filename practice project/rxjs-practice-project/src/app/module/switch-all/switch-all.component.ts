import { Component, OnInit } from "@angular/core";
import { from, of } from "rxjs";
import {
  concatMap,
  delay,
  map,
  mergeMap,
  switchAll,
  switchMap,
} from "rxjs/operators";

@Component({
  selector: "app-switch-all",
  templateUrl: "./switch-all.component.html",
  styleUrls: ["./switch-all.component.css"],
})
export class SwitchAllComponent implements OnInit {
  source = from(["angular", "JS", "java"]).pipe(delay(1000));

  getData(data) {
    return of(data + "developer").pipe(delay(1000));
  }
  
  constructor() {
    //map
    this.source.pipe(map((data) => this.getData(data))).subscribe((res) => {
      // console.log(res);
    });

    // map + switchAll
    this.source
      .pipe(
        map((data) => this.getData(data)),
        switchAll()
      )
      .subscribe((res) => {
        // console.log(res);
      });

    // switchMap
    this.source
      .pipe(switchMap((data) => this.getData(data)))
      .subscribe((res) => {
        // console.log(res);
      });

    // mergeMap
    this.source
      .pipe(mergeMap((data) => this.getData(data)))
      .subscribe((res) => {
        // console.log(res);
      });

    // concatMap
    this.source
      .pipe(concatMap((data) => this.getData(data)))
      .subscribe((res) => {
        console.log(res);
      });
  }

  ngOnInit() {}
}
