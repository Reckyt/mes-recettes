export interface Recipe {
  id: string;
  type: string;
  name: string;
  portions: number;
  ingredients: Ingredient[];
  preparation_time: number;
  cooking_time: number;
  instructions: string[];
  variants?: string[];
}

export interface Ingredient {
  name: string;
  quantity: string;
  detail?: string;
}

export interface NewRecipeData {
  // type: string;
  name: string;
  // portions: number;
  // ingredients: Ingredient[];
  preparation_time: number;
  cooking_time: number;
  // instructions: string[];
  // variants?: string[];
}
