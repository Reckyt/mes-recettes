import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import { Recipe } from '../../model/recipe';
import { RecipesService } from '../recipes.service';
import { IngredientsToListModalComponent } from '../../shared/modal/ingredients-to-list-modal/ingredients-to-list-modal.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
  imports: [MatMenuModule, IngredientsToListModalComponent],
})
export class RecipeComponent {
  @Input({ required: true }) recipe!: Recipe;
  @Output() isUpdatingRecipe = new EventEmitter();

  isAddingIngredientsToList: boolean = false;

  private recipesService = inject(RecipesService);

  onUpdateRecipe() {
    this.isUpdatingRecipe.emit();
  }

  onDeleteRecipe() {
    this.recipesService.removeRecipe(this.recipe.id);
  }

  onAddIngredientsToList() {
    this.isAddingIngredientsToList = !this.isAddingIngredientsToList;
  }
}
