import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Recipe } from '../model/recipe';
import { RecipesService } from './recipes.service';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { NoRecipeComponent } from './no-recipe/no-recipe.component';
import { ItemCardComponent } from '../shared/item-card/item-card.component';
import { SearchInputComponent } from '../shared/search-input/search-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  imports: [
    RecipeComponent,
    NewRecipeComponent,
    UpdateRecipeComponent,
    NoRecipeComponent,
    ItemCardComponent,
    SearchInputComponent,
    MatTooltipModule,
    CommonModule,
  ],
})
export class RecipesComponent implements OnInit {
  selectedRecipeId?: string;
  isAddingRecipe: boolean = false;
  isUpdatingRecipe: boolean = false;
  searchInput: string = '';
  isSorting: boolean = false;
  aToz: boolean = true;
  displayedRecipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.displayedRecipes = this.recipesService.getRecipes();
  }

  get recipes() {
    return this.recipesService.getRecipes();
  }

  onSelectRecipe(id: string) {
    this.selectedRecipeId = id;
  }

  get selectedRecipe() {
    return this.recipes.find(
      (recipe: Recipe) => recipe.id === this.selectedRecipeId
    );
  }

  onAddRecipe() {
    this.isAddingRecipe = !this.isAddingRecipe;
  }

  onUpdateRecipe() {
    this.isUpdatingRecipe = !this.isUpdatingRecipe;
  }

  get filteredRecipes() {
    return this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }

  isSort() {
    this.isSorting = !this.isSorting;
    if (this.isSorting === false) {
      this.displayedRecipes = this.recipes;
    }
  }

  updateDisplayedRecipes() {
    this.displayedRecipes = this.displayedRecipes
      .filter((recipe) =>
        recipe.name.toLowerCase().includes(this.searchInput.toLowerCase())
      )
      .sort((a, b) => {
        if (this.aToz) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
  }

  onSearchInputChange(query: string) {
    this.searchInput = query;
    this.updateDisplayedRecipes();
  }

  toggleSortOrder() {
    this.aToz = !this.aToz;
    this.updateDisplayedRecipes();
  }

  filterWithTags() {}
}
