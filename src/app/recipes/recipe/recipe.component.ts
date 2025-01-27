import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent {
  @Input({ required: true }) recipe!: Recipe;
  @Output() isAddingRecipe = new EventEmitter();

  onAddRecipe() {
    this.isAddingRecipe.emit();
  }
}
