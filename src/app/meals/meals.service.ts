import { Injectable } from '@angular/core';

import { Meal } from '../model/meal';
import { meals } from '../../asset/mealsList';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  private meals: Meal[] = meals;

  constructor() {
    const meals = localStorage.getItem('meals');

    if (meals) {
      this.meals = JSON.parse(meals);
    }
  }

  getMeals() {
    return this.meals;
  }

  addMeal() {}

  removeMeal() {}

  updateMeal() {}

  private saveMeals() {
    localStorage.setItem('meals', JSON.stringify(this.meals));
  }
}
