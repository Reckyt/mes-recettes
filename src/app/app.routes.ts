import { Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { MealsComponent } from './meals/meals.component';
import { ShoppingListsComponent } from './shopping-list/shopping-lists.component';

export const routes: Routes = [
  {
    path: 'recettes',
    component: RecipesComponent,
  },
  {
    path: 'plats',
    component: MealsComponent,
  },
  {
    path: 'liste-de-course',
    component: ShoppingListsComponent,
  },
];
