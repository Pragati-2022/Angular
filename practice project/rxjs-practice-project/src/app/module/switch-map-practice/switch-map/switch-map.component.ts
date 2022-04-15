import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { from } from "rxjs";
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  pluck,
  switchMap,
  toArray,
} from "rxjs/operators";

@Component({
  selector: "app-switch-map",
  templateUrl: "./switch-map.component.html",
  styleUrls: ["./switch-map.component.css"],
})
export class SwitchMapComponent implements OnInit, AfterViewInit {
  @ViewChild("searchForm", { static: false }) searchForm: NgForm;

  searchResults = [];
  names = [
    {
      id: 1,
      name: "pragati",
    },
    {
      id: 2,
      name: "sid",
    },
    {
      id: 3,
      name: "mihir",
    },
    {
      id: 4,
      name: "mitu",
    },
    {
      id: 5,
      name: "mitu",
    },
    {
      id: 6,
      name: "nikul",
    },
  ];

  getSearch(searchTerm) {
    // return this.names.filter((e) => e.name == searchTerm);
   return from(this.names).pipe(
      filter((data) => data.name == searchTerm),
      toArray()
    );
  }
  constructor() {}
  ngAfterViewInit(): void {
    // console.log(this.getSearch("mitu"));

    const formValue = this.searchForm.valueChanges;

    // formValue.pipe(map((data) => data.searchTerm)).subscribe(res => {
    //   console.log(res);
    // })

    formValue
      .pipe(
        filter(() => this.searchForm.valid),
        pluck("searchTerm"),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((data) => this.getSearch(data))
      )
      .subscribe((res) => {
        console.log(res);
        this.searchResults = res;
      });
  }

  ngOnInit() {}
}
