import { Component } from '@angular/core';

import { Recipe } from '../model/recipe';
import { RecipesService } from './recipes.service';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { NoRecipeComponent } from './no-recipe/no-recipe.component';
import { ItemCardComponent } from '../shared/item-card/item-card.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  imports: [
    RecipeComponent,
    NewRecipeComponent,
    UpdateRecipeComponent,
    NoRecipeComponent,
    ItemCardComponent,
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
