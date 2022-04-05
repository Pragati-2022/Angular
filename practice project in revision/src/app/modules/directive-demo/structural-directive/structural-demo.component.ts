import { Component } from "@angular/core";

@Component({
  selector: "app-structural-demo",
  templateUrl: "./structural-demo.component.html",
})
export class StructuralDemoComponent {
  step = "step2";
  numArray = [1, 2, 3, 4, 4, 5];
  alphaObj = { a: "a", b: "b", c: "c", d: "d" };
  dropDownValue = "";
  items = [
    { name: "One", val: 1 },
    { name: "Two", val: 2 },
    { name: "Three", val: 3 },
  ];
  selectedValue = "";

  SetDropDownValue(dropDownval) {
    this.dropDownValue = dropDownval.target.value;
  }

  setDropDown(item){
    this.selectedValue = item.target.value;
  }
}
