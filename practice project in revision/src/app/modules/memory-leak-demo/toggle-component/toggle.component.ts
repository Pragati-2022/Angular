import { Component } from "@angular/core";

@Component({
  selector: "app-toggle",
  templateUrl: "./toggle.component.html",
})
export class ToggleComponent {
  isDestroyed = false;

  toggleComponent() {
    this.isDestroyed = !this.isDestroyed;
  }
}
