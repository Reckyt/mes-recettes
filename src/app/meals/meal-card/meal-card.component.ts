import { Component, Input } from '@angular/core';
import { Meal } from '../../model/meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css',
})
export class MealCardComponent {
  @Input({ required: true }) meal!: Meal;
}
