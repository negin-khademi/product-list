// src/app/models/recipe.model.ts
export interface RecipeImage {
	thumbnail: string;
	mobile: string;
	tablet: string;
	desktop: string;
}

export interface Recipe {
	image: RecipeImage;
	name: string;
	category: string;
	price: number;
	inBill?: boolean;
	quantity?: number;
}
