export interface Recipe {
  id: string;
  name: string;
  portions: number;
  description?: string;
  ingredients: Ingredient[];
  preparation_time: number;
  cooking_time: number;
  instructions: string[];
  tags: Tag[];
  variants?: string[];
}

export interface Ingredient {
  name: string;
  quantity: string;
  detail?: string;
}

export interface Tag {
  id: string;
  name: string;
  description?: string;
}

export interface NewRecipeData {
  // type: string;
  name: string;
  // portions: number;
  // description: string;
  // ingredients: Ingredient[];
  preparation_time: number;
  cooking_time: number;
  // instructions: string[];
  // variants?: string[];
}
