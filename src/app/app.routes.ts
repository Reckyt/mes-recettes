import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { MealsComponent } from './meals/meals.component';
import { UpdateRecipeComponent } from './recipes/update-recipe/update-recipe.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';

export const routes: Routes = [
  {
    path: 'recettes',
    component: RecipesComponent,
  },
  {
    path: 'plats',
    component: MealsComponent,
  },
];
