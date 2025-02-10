import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Recipe } from '../../model/recipe';
import { List } from '../../model/list';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
  imports: [RouterLink, RouterLinkActive],
})
export class ItemCardComponent {
  @Input() item!: Recipe | List;

  // isRecipe(item: Recipe | List): item is Recipe {
  //   return (item as Recipe).preparation_time !== undefined;
  // }

  isList(item: Recipe | List): item is List {
    return (item as List).itemNumber !== undefined;
  }
}
