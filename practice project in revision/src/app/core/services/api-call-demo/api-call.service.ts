import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { resolve } from "url";

@Injectable({
  providedIn: "root",
})
export class ApiCallService {
  constructor(private _httpClient: HttpClient) {}

  apiCall() {
    return this._httpClient.get<any>(
      "https://jsonplaceholder.typicode.com/todos"
    );
  }

  apiCallByPromise = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => {
        resolve(data);
        return data.json();
      })
      .then((data) => {
        console.log(data);
      });
  });


  async apiCallByAsyncAwait(){
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let jsonData = await data.json();

    return jsonData;
  } 
}
