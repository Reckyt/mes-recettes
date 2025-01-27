import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipesService } from './recipes/recipes.service';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    RecipesComponent,
    RecipeComponent,
    NewRecipeComponent,
  ],
})
export class AppComponent {
  selectedRecipeId?: string;
  isAddingRecipe: boolean = false;

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
}
