import { Component, Input } from '@angular/core';
import { Recipe } from '../../model/recipe';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
  imports: [RouterLink, RouterLinkActive],
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: Recipe;
}
