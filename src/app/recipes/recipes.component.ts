import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RecipeCardComponent } from '../shared/recipe-card/recipe-card.component';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  imports: [RecipeCardComponent],
})
export class RecipesComponent {
  @Input({ required: true }) recipes!: Recipe[];
  @Output() select = new EventEmitter();
  @Output() isAddingRecipe = new EventEmitter();

  onSelectRecipe(recipeId: string) {
    this.select.emit(recipeId);
  }

  onAddRecipe() {
    this.isAddingRecipe.emit();
  }
}
