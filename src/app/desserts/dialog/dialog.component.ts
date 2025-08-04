import { Component, EventEmitter, Input, Output, inject } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { DataService } from "../../data.service";
import { Dialog } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-dialog",
  imports: [Dialog, ButtonModule, InputTextModule, CommonModule],
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
})
export class DialogComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  recipeService = inject(DataService);
  selected = this.recipeService.selectedRecipes;
  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible); // Emit change to parent
  }

  openDialog() {
    this.visible = true;
    this.visibleChange.emit(this.visible); // Emit change to parent
  }
  removeFromCart(recipe: Recipe) {
    this.recipeService.updateRecipeStatus(recipe.name, false, 0);
  }

  onNewOrder() {
    this.recipeService.startNewOrder();
    this.closeDialog();
  }
}
