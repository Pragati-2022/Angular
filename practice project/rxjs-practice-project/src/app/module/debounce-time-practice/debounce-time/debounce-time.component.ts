import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

@Component({
  selector: "app-debounce-time",
  templateUrl: "./debounce-time.component.html",
  styleUrls: ["./debounce-time.component.css"],
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {
  @ViewChild("name", { static: false }) name: ElementRef;
  @ViewChild("name2", { static: false }) name2: ElementRef;
  reqData = null;
  reqData2 = null;
  constructor() {}

  ngAfterViewInit(): void {

    //debounce time example 
    const searchTerm = fromEvent<any>(this.name.nativeElement, "keyup").pipe(
      map((data) => data.target.value),
      debounceTime(500)
    );

    searchTerm.subscribe((res) => {
      console.log(res);
      this.reqData = res;
    });

    //distinctUntilChanged example 
    const searchTerm2 = fromEvent<any>(this.name2.nativeElement, "keyup").pipe(
      map((data) => data.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTerm2.subscribe((res) => {
      console.log(res);
      this.reqData2 = res;
    });
  }

  ngOnInit() {}
}
