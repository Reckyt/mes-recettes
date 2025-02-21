import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Recipe, Tag } from '../model/recipe';
import { RecipesService } from './recipes.service';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { NoRecipeComponent } from './no-recipe/no-recipe.component';
import { ItemCardComponent } from '../shared/item-card/item-card.component';
import { SearchInputComponent } from '../shared/search-input/search-input.component';
import { CommonModule } from '@angular/common';
import { TagsService } from '../tags/tags.service';
import { TagComponent } from '../tags/tag/tag.component';

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
    TagComponent,
  ],
})
export class RecipesComponent implements OnInit {
  selectedRecipeId?: string;
  isAddingRecipe: boolean = false;
  isUpdatingRecipe: boolean = false;
  searchInput: string = '';
  isSorting: boolean = false;
  isFilteredByTag: boolean = false;
  aToz: boolean = true;
  displayedRecipes: Recipe[] = [];
  tags: Tag[] = [];
  selectedTags: Tag[] = [];

  constructor(
    private recipesService: RecipesService,
    private tagsService: TagsService
  ) {}

  ngOnInit() {
    this.displayedRecipes = this.recipesService.getRecipes();
    this.tags = this.tagsService.getTags();
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
      // .filter((recipe) => {
      //   return this.selectedTags.length > 0
      //     ? this.selectedTags.some((tag) => recipe.tags.includes(tag))
      //     : true;
      // })
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

  // TODO filtering functions ============================================

  isFilteredWithTags() {
    this.isFilteredByTag = !this.isFilteredByTag;
  }

  onFilteredWithTags(tag: Tag) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter((t) => t !== tag);
    } else {
      this.selectedTags.push(tag);
    }
    this.updateDisplayedRecipes();
  }
}
