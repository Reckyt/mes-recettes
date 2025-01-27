import { Injectable } from '@angular/core';

import { recipes } from '../../asset/recipesList';
import { NewRecipeData } from '../model/recipe';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes = recipes;

  constructor() {
    const recipes = localStorage.getItem('recipes');

    if (recipes) {
      this.recipes = JSON.parse(recipes);
    }
  }

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipeData: NewRecipeData) {
    this.recipes.push({
      id: new Date().getTime().toString(),
      name: recipeData.name,
      type: '',
      portions: 0,
      preparation_time: recipeData.preparation_time,
      cooking_time: recipeData.cooking_time,
      ingredients: [],
      instructions: [],
    });
    this.saveRecipes();
  }

  // removeRecipe(id: string) {
  //   this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  //   this.saveRecipes();
  // }

  private saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }
}
