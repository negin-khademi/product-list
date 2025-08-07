import { Component, signal } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { DessertsComponent } from "./desserts/desserts.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ButtonModule, DessertsComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  ngOnInit(): void {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }

  protected readonly title = signal("03-product-list");
}
