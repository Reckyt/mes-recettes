import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { List } from '../../model/list';
import { ShoppingListsService } from '../shopping-lists.service';
import { UpdateListNameModalComponent } from '../../shared/modal/update-list-name-modal/update-list-name-modal.component';
import { ModalService } from '../../shared/modal.service';
import { ConfirmationModalComponent } from '../../shared/modal/confirmation-modal/confirmation-modal.component';
import { InputCheckboxComponent } from '../../shared/input-checkbox/input-checkbox.component';
import { SearchInputComponent } from '../../shared/search-input/search-input.component';

@Component({
  selector: 'app-list',
  imports: [
    UpdateListNameModalComponent,
    ConfirmationModalComponent,
    FormsModule,
    InputCheckboxComponent,
    SearchInputComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() list!: List;
  enteredItem: string = '';
  actionModal: string = '';
  searchInput: string = '';

  private shoppingListService = inject(ShoppingListsService);
  private modalService = inject(ModalService);

  isOpeningModal = this.modalService.showModal;

  get filteredItem(): string[] {
    return this.list.item.filter((element) =>
      element.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }

  onSearchInputChange(query: string) {
    this.searchInput = query;
  }

  onRemoveList(listId: string) {
    this.shoppingListService.removeList(listId);
  }

  onRemoveListItem(listId: string, itemName: string) {
    this.shoppingListService.removeListItem(listId, itemName);
  }

  onUpdatingNameItem() {}

  onOpenModal(action: string) {
    this.modalService.show();
    this.actionModal = action;
  }

  onAddItem(listId: string, item: string) {
    this.shoppingListService.addListItem(listId, item);
    this.enteredItem = '';
  }
}
