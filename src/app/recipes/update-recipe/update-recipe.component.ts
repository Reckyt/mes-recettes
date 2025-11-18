import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { RecipesService } from '../recipes.service';
import { Recipe, Tag } from '../../model/recipe';
import { TagComponent } from '../../tags/tag/tag.component';
import { TagsService } from '../../tags/tags.service';

@Component({
  selector: 'app-update-recipe',
  imports: [FormsModule, ReactiveFormsModule, MatTooltipModule, TagComponent],
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css',
})
export class UpdateRecipeComponent {
  @Input() recipe?: Recipe;
  @Output() isUpdatingRecipe = new EventEmitter();

  tags: Tag[] = [];
  selectedTags: Tag[] = [];
  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  private recipesService = inject(RecipesService);
  private tagsService = inject(TagsService);

  ngOnInit() {
    this.tags = this.tagsService.getTags();
    this.selectedTags = this.recipe?.tags ?? [];
    this.recipeForm = this.fb.group({
      name: this.recipe!.name,
      selectedTags: this.selectedTags,
      description: this.recipe?.description,
      preparationTime: this.recipe?.preparation_time,
      cookingTime: this.recipe?.cooking_time,
      portions: this.recipe?.portions,
      ingredients: this.recipe?.ingredients,
      instructions: this.recipe?.instructions,
    });
  }

  onSelectionChange(tag: Tag) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter((t) => t !== tag);
    } else {
      this.selectedTags.push(tag);
    }
  }

  onUpdateRecipe() {
    this.isUpdatingRecipe.emit();
  }

  onSubmit(id: string) {
    this.recipesService.updateRecipe(id, {
      name: this.recipeForm.value.name,
      tags: this.selectedTags,
      description: this.recipeForm.value.description,
      preparation_time: this.recipeForm.value.preparationTime,
      cooking_time: this.recipeForm.value.cookingTime,
      portions: this.recipeForm.value.portions,
      ingredients: this.recipeForm.value.ingredients,
      instructions: this.recipeForm.value.instructions,
    });
    this.isUpdatingRecipe.emit();
  }
}
