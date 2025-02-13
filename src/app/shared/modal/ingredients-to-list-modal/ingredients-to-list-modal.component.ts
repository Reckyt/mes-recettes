import {
  AfterContentInit,
  Component,
  EventEmitter,
  inject,
  input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingListsService } from '../../../shopping-list/shopping-lists.service';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'app-ingredients-to-list-modal',
  imports: [FormsModule, ModalComponent],
  templateUrl: './ingredients-to-list-modal.component.html',
  styleUrl: './ingredients-to-list-modal.component.css',
})
export class IngredientsToListModalComponent implements AfterContentInit {
  ingredients = input<string>();
  @Output() closeMenu = new EventEmitter();

  ingredientsArray: string[] = [];
  ingredientsSelected: string[] = [];
  listSelectedId: string = '';

  private shoppingListsService = inject(ShoppingListsService);

  get lists() {
    return this.shoppingListsService.getLists();
  }

  ngAfterContentInit() {
    if (this.ingredients()) {
      this.ingredientsArray = this.ingredients()!.split('\n');
    }
  }

  toggleSelection(ingredient: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.ingredientsSelected.push(ingredient);
    } else {
      this.ingredientsSelected = this.ingredientsSelected.filter(
        (item) => item !== ingredient
      );
    }
  }

  selectList(listId: string) {
    this.listSelectedId = listId;
  }

  onSubmit() {
    this.shoppingListsService.addListItemsFromRecipe(
      this.listSelectedId,
      this.ingredientsSelected
    );
    this.closeMenu.emit();
  }
}
