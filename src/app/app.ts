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
  constructor() {
    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Apply the 'dark' class to <html> or <body> based on system preference
    if (prefersDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // ngOnInit(): void {
  //   const theme = localStorage.getItem("theme");
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   }
  // }

  protected readonly title = signal("03-product-list");
}
