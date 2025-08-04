import { Injectable, computed, signal } from "@angular/core";

import { Recipe } from "./recipe.model";
import data from "../data.json";

@Injectable({
	providedIn: "root",
})
export class DataService {
	constructor() {}
	recipeList = signal<Recipe[]>(
		data.map((recipe) => ({ ...recipe, inBill: false, quantity: 0 }))
	);

	isCartEmpty = computed(() => {
		return this.recipeList().every((r) => r.quantity === 0);
	});

	selectedRecipes = computed(() =>
		this.recipeList().filter((r) => r.quantity != null && r.quantity > 0)
	);

	totalItemsInCart = computed(() =>
		this.recipeList()
			.filter((r) => r.quantity != null && r.quantity > 0)
			.reduce((sum, r) => sum + (r.quantity != null ? r.quantity : 0), 0)
	);

	totalPriceInCart = computed(() =>
		this.recipeList()
			.filter((r) => r.quantity != null && r.quantity > 0)
			.reduce((sum, r) => sum + (r.quantity ?? 0) * r.price, 0)
	);

	updateRecipeStatus(name: string, inBill: boolean, quantity: number) {
		const updatedRecipes = this.recipeList().map((recipe) => {
			if (recipe.name === name) {
				return {
					...recipe,
					inBill,
					quantity,
				};
			}
			return recipe;
		});

		this.recipeList.set(updatedRecipes);
	}
}
