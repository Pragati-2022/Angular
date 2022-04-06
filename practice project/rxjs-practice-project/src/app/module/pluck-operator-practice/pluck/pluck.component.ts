import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { map, pluck } from "rxjs/operators";

@Component({
  selector: "app-pluck",
  templateUrl: "./pluck.component.html",
  styleUrls: ["./pluck.component.css"],
})
export class PluckComponent implements OnInit {
  users = [
    {
      id: 1,
      name: "pragati",
      skill: "angualr",
      job: {
        title: "devloper1",
        city: "ahemdabad",
      },
    },
    {
      id: 2,
      name: "sid",
      skill: "JS",
      job: {
        title: "devloper",
        city: "baroda",
      },
    },
    {
      id: 3,
      name: "khushi",
      skill: "HTML",
      job: {
        title: "designer1",
        city: "jamnagar",
      },
    },
    {
      id: 4,
      name: "mihir",
      skill: "figma",
      job: {
        title: "designer",
        city: "rajkot",
      },
    },
  ];

  constructor() {

    //pluck Ex
    const fromOperator$ = from(this.users);

    fromOperator$.pipe(map(data => data.skill)).subscribe(res => console.log(res));
    fromOperator$.pipe(map(data => data.job.title)).subscribe(res => console.log(res));

    fromOperator$.pipe(pluck('skill')).subscribe(res => console.log(res));
    fromOperator$.pipe(pluck('job', 'title')).subscribe(res => console.log(res));
  }

  ngOnInit() {}
}
