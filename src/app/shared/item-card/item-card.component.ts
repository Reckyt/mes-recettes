import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Recipe } from '../../model/recipe';
import { List } from '../../model/list';
import { RecipesService } from '../../recipes/recipes.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  @Input() item!: Recipe | List;
  private recipesService = inject(RecipesService);

  isList(item: Recipe | List): item is List {
    return (item as List).itemNumber !== undefined;
  }

  isSelected() {
    return this.recipesService.selectedRecipeId() === this.item.id;
  }

  onSelect() {
    this.recipesService.selectedRecipeId.set(this.item.id);
  }
}
