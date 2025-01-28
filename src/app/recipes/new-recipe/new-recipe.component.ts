import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-new-recipe',
  imports: [FormsModule],
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

  private recipesService = inject(RecipesService);

  onAddRecipe() {
    this.isAddingRecipe.emit();
  }

  onSubmit() {
    this.recipesService.addRecipe({
      name: this.enteredName,
      preparation_time: this.enteredPreparationTime,
      cooking_time: this.enteredCookingTime,
      description: this.enteredDescription,
      ingredients: this.enteredIngredients,
      instructions: this.enteredInstructions,
    });
    this.isAddingRecipe.emit();
  }
}
