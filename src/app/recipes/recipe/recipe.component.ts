import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Recipe } from '../../model/recipe';
import { RecipesService } from '../recipes.service';
import { IngredientsToListModalComponent } from '../../shared/modal/ingredients-to-list-modal/ingredients-to-list-modal.component';
import { ConfirmationModalComponent } from '../../shared/modal/confirmation-modal/confirmation-modal.component';
import { ModalService } from '../../shared/modal.service';
import { TagComponent } from '../../tags/tag/tag.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
  imports: [
    MatMenuModule,
    IngredientsToListModalComponent,
    MatTooltipModule,
    ConfirmationModalComponent,
    TagComponent,
  ],
})
export class RecipeComponent {
  @Input({ required: true }) recipe!: Recipe;
  @Output() isUpdatingRecipe = new EventEmitter();

  isAddingIngredientsToList: boolean = false;
  private recipesService = inject(RecipesService);
  private modalService = inject(ModalService);

  isOpeningModal = this.modalService.showModal;

  onOpenModal() {
    this.modalService.show();
  }

  onUpdateRecipe() {
    this.isUpdatingRecipe.emit();
  }

  onDeleteRecipe() {
    this.recipesService.removeRecipe(this.recipe.id);
  }

  onAddIngredientsToList() {
    this.isAddingIngredientsToList = !this.isAddingIngredientsToList;
  }
}
