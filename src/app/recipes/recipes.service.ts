import { Injectable, signal } from '@angular/core';

import { recipes } from '../../asset/recipesList';
import { NewRecipeData, Recipe } from '../model/recipe';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes: Recipe[] = recipes;

  constructor() {
    const recipes = localStorage.getItem('recipes');

    if (recipes) {
      this.recipes = JSON.parse(recipes);
    }
  }

  selectedRecipeId = signal<string | undefined>(undefined);

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipeData: NewRecipeData) {
    this.recipes.push({
      id: new Date().getTime().toString(),
      name: recipeData.name,
      tags: [],
      portions: 0,
      preparation_time: recipeData.preparation_time,
      cooking_time: recipeData.cooking_time,
      description: recipeData.description,
      ingredients: recipeData.ingredients,
      instructions: recipeData.instructions,
    });
    this.saveRecipes();
  }

  removeRecipe(id: string) {
    this.recipes = this.recipes.filter((recipe: Recipe) => recipe.id !== id);
    this.saveRecipes();
  }

  updateRecipe(id: string, recipeData: NewRecipeData) {
    const recipesUpdated = this.recipes.map((recipe) => {
      if (recipe.id === id) {
        return {
          ...recipe,
          name: recipeData.name,
          preparation_time: recipeData.preparation_time,
          cooking_time: recipeData.cooking_time,
          description: recipeData.description,
          ingredients: recipeData.ingredients,
          instructions: recipeData.instructions,
        };
      }
      return recipe;
    });
    this.recipes = recipesUpdated;
    this.saveRecipes();
  }

  private saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }
}
