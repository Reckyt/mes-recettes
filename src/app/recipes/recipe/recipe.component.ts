import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { Recipe } from '../../model/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent {
  @Input({ required: true }) recipe!: Recipe;
  @Output() isAddingRecipe = new EventEmitter();

  private recipesService = inject(RecipesService);

  onAddRecipe() {
    this.isAddingRecipe.emit();
  }
  onDeleteRecipe() {
    this.recipesService.removeRecipe(this.recipe.id);
  }
}
