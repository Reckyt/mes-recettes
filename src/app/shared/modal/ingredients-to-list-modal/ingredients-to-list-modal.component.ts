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
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-ingredients-to-list-modal',
  imports: [FormsModule, ModalComponent, ButtonComponent],
  templateUrl: './ingredients-to-list-modal.component.html',
  styleUrl: './ingredients-to-list-modal.component.css',
})
export class IngredientsToListModalComponent implements AfterContentInit {
  ingredients = input<string>();
  title = input<string>();
  @Output() closeMenu = new EventEmitter();

  ingredientsArray: string[] = [];
  ingredientsSelected: { ingredient: string; checked: boolean }[] = [];
  listSelectedId: string = '';
  allChecked: boolean = false;
  newListName: string = '';
  isAddingNewList: boolean = false;

  private shoppingListsService = inject(ShoppingListsService);

  get lists() {
    return this.shoppingListsService.getLists();
  }

  ngAfterContentInit() {
    if (this.ingredients()) {
      this.ingredientsArray = this.ingredients()!.split('\n');
      this.ingredientsSelected = this.ingredientsArray.map((ingredient) => ({
        ingredient,
        checked: false,
      }));
    }
  }

  getIndex(item: { ingredient: string; checked: boolean }) {
    return this.ingredientsSelected.indexOf(item);
  }

  toggleSelection(index: number) {
    this.ingredientsSelected[index].checked =
      !this.ingredientsSelected[index].checked;
    this.updateAllChecked();
  }

  toggleAllCheck() {
    this.allChecked = !this.allChecked;
    this.ingredientsSelected.forEach(
      (item) => (item.checked = this.allChecked)
    );
  }

  updateAllChecked(): boolean {
    return (this.allChecked = this.ingredientsSelected.every(
      (item) => item.checked
    ));
  }

  selectList(listId: string) {
    this.listSelectedId = listId;
  }

  onCloseModal() {
    this.closeMenu.emit();
  }

  newList() {
    this.isAddingNewList = !this.isAddingNewList;
  }

  saveNewList() {
    this.shoppingListsService.addList({ name: this.newListName });
    this.newList();
  }

  onSubmit() {
    const selectedIngredients = this.ingredientsSelected
      .filter((item) => item.checked)
      .map((item) => item.ingredient);

    this.shoppingListsService.addListItemsFromRecipe(
      this.listSelectedId,
      selectedIngredients
    );
    this.closeMenu.emit();
  }
}
