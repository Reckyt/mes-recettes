export interface Recipe {
  id: string;
  name: string;
  portions: number;
  description?: string;
  preparation_time: number;
  cooking_time: number;
  ingredients: string;
  instructions: string;
  tags: Tag[];
  variants?: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface NewRecipeData {
  name: string;
  tags: Tag[];
  description: string;
  ingredients: string;
  preparation_time: number;
  cooking_time: number;
  instructions: string;
  portions: number;
}

// export interface Ingredient {
//   name: string;
//   quantity: string;
//   detail?: string;
// }
