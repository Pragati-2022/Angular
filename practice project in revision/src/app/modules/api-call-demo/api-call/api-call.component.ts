import { Component, OnInit } from "@angular/core";
import { ApiCallService } from "src/app/core/services/api-call-demo/api-call.service";

@Component({
  selector: "app-api-call",
  templateUrl: "./api-call.component.html",
  styleUrls: ["./api-call.component.css"],
})
export class ApiCallComponent implements OnInit {
  constructor(private _apiCallService: ApiCallService) {}

  ngOnInit() {
    this._apiCallService.apiCall().subscribe((data) => {
      console.log(data);
    });

    this._apiCallService.apiCallByPromise;

    this._apiCallService.apiCallByAsyncAwait().then(data => console.log(data));
  }
}
