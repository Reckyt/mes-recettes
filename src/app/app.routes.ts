import { Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { MealsComponent } from './meals/meals.component';

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
