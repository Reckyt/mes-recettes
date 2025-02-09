import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RecipeCardComponent } from '../shared/recipe-card/recipe-card.component';
import { Recipe } from '../model/recipe';
import { RecipesService } from './recipes.service';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { NoRecipeComponent } from './no-recipe/no-recipe.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  imports: [
    RecipeCardComponent,
    RecipeComponent,
    NewRecipeComponent,
    UpdateRecipeComponent,
    NoRecipeComponent,
    RouterOutlet,
  ],
})
export class RecipesComponent {
  selectedRecipeId?: string;
  isAddingRecipe: boolean = false;
  isUpdatingRecipe: boolean = false;

  constructor(private recipesService: RecipesService) {}

  get recipes() {
    return this.recipesService.getRecipes();
  }

  onSelectRecipe(id: string) {
    this.selectedRecipeId = id;
  }

  get selectedRecipe() {
    return this.recipes.find(
      (recipe: Recipe) => recipe.id === this.selectedRecipeId
    );
  }

  onAddRecipe() {
    this.isAddingRecipe = !this.isAddingRecipe;
  }

  onUpdateRecipe() {
    this.isUpdatingRecipe = !this.isUpdatingRecipe;
  }
}
