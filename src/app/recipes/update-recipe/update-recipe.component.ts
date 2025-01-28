import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { RecipesService } from '../recipes.service';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-update-recipe',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css',
})
export class UpdateRecipeComponent {
  @Input() recipe?: Recipe;
  @Output() isUpdatingRecipe = new EventEmitter();

  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  private recipesService = inject(RecipesService);

  ngOnInit() {
    this.recipeForm = this.fb.group({
      name: this.recipe!.name,
      description: this.recipe?.description,
      preparationTime: this.recipe?.preparation_time,
      cookingTime: this.recipe?.cooking_time,
      ingredients: this.recipe?.ingredients,
      instructions: this.recipe?.instructions,
    });
  }

  onUpdateRecipe() {
    this.isUpdatingRecipe.emit();
  }

  onSubmit(id: string) {
    this.recipesService.updateRecipe(id, {
      name: this.recipeForm.value.name,
      description: this.recipeForm.value.description,
      preparation_time: this.recipeForm.value.preparationTime,
      cooking_time: this.recipeForm.value.cookingTime,
      ingredients: this.recipeForm.value.ingredients,
      instructions: this.recipeForm.value.instructions,
    });
    this.isUpdatingRecipe.emit();
  }
}
