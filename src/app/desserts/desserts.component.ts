import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  inject,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { DataService } from "../data.service";
import { DialogComponent } from "./dialog/dialog.component";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-desserts",
  imports: [CommonModule, DialogComponent],
  templateUrl: "./desserts.component.html",
  styleUrl: "./desserts.component.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DessertsComponent {
  @Input() recipe!: Recipe;
  recipeService = inject(DataService);
  recipes = this.recipeService.recipeList();
  selected = this.recipeService.selectedRecipes;
  modalVisible: boolean = false;

  changeBillStatus(recipe: Recipe) {
    if (!recipe.inBill) {
      recipe.inBill = true; // Mark as added to cart
      recipe.quantity = 1; // Set initial quantity
    }
    this.recipeService.updateRecipeStatus(
      this.recipe?.name,
      this.recipe?.inBill ?? false,
      this.recipe?.quantity ?? 1
    );
  }

  // Function to increment the quantity
  incrementQuantity(recipe: any) {
    recipe.quantity++;
  }

  // Function to decrement the quantity
  decrementQuantity(recipe: any) {
    if (recipe.quantity > 1) {
      recipe.quantity--;
    }
  }

  handleDecrement(recipe: Recipe) {
    if (recipe.quantity === 1) {
      this.removeFromCart(recipe);
    } else {
      this.decrementQuantity(recipe);
    }
  }

  removeFromCart(recipe: Recipe) {
    this.recipeService.updateRecipeStatus(recipe.name, false, 0);
  }

  confirmation() {
    this.modalVisible = true;
    console.log("hello from confirmation");
  }
}
