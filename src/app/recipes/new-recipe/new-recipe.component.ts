import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { RecipesService } from '../recipes.service';
import { TagsService } from '../../tags/tags.service';
import { Tag } from '../../model/recipe';
import { TagComponent } from '../../tags/tag/tag.component';

@Component({
  selector: 'app-new-recipe',
  imports: [FormsModule, MatTooltipModule, TagComponent],
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
  tags: Tag[] = [];
  selectedTags: Tag[] = [];

  private recipesService = inject(RecipesService);
  private tagsService = inject(TagsService);

  ngOnInit() {
    this.tags = this.tagsService.getTags();
  }

  onAddRecipe() {
    this.isAddingRecipe.emit();
  }

  onSelectionChange(tag: Tag) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter((t) => t !== tag);
    } else {
      this.selectedTags.push(tag);
    }
  }

  onSubmit() {
    this.recipesService.addRecipe({
      name: this.enteredName,
      tags: this.selectedTags,
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
