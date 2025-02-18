import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-new-recipe',
  imports: [FormsModule, MatTooltipModule],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css',
})
export class NewRecipeComponent {
  @Output() isAddingRecipe = new EventEmitter();
  enteredName = '';
  enteredDescription = '';
  enteredPreparationTime = 0;
  enteredCookingTime = 0;
  enteredIngredients = '';
  enteredInstructions = '';
  enteredPortions = 0;

  private recipesService = inject(RecipesService);

  onAddRecipe() {
    this.isAddingRecipe.emit();
  }

  onSubmit() {
    this.recipesService.addRecipe({
      name: this.enteredName,
      preparation_time: this.enteredPreparationTime,
      cooking_time: this.enteredCookingTime,
      portions: this.enteredPortions,
      description: this.enteredDescription,
      ingredients: this.enteredIngredients,
      instructions: this.enteredInstructions,
    });
    this.isAddingRecipe.emit();
  }
}
