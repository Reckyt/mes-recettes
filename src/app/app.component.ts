import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Recipe } from './model/recipe';
import { recipes } from '../asset/recipesList';
import { RecipeComponent } from './recipes/recipe/recipe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, RecipesComponent, RecipeComponent],
})
export class AppComponent {
  recipes: Recipe[] = recipes;
  selectedRecipeId?: string;

  onSelectRecipe(id: string) {
    this.selectedRecipeId = id;
  }

  get selectedRecipe() {
    return this.recipes.find((recipe) => recipe.id === this.selectedRecipeId);
  }
}
