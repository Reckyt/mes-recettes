import { Component, inject } from '@angular/core';
import { MealsService } from './meals.service';
import { MealCardComponent } from './meal-card/meal-card.component';

@Component({
  selector: 'app-meals',
  imports: [MealCardComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css',
})
export class MealsComponent {
  private mealsService = inject(MealsService);

  get meals() {
    return this.mealsService.getMeals();
  }
}
