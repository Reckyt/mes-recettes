import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
  imports: [RouterLink, RouterLinkActive],
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: Recipe;
}
