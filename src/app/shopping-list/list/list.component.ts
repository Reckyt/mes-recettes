import { Component, inject, Input, input, signal } from '@angular/core';

import { ShoppingListsService } from '../shopping-lists.service';
import { List } from '../../model/list';
import { UpdateListNameModalComponent } from '../../shared/modal/update-list-name-modal/update-list-name-modal.component';
import { ModalService } from '../../shared/modal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [UpdateListNameModalComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() list!: List;
  enteredItem = '';

  private shoppingListService = inject(ShoppingListsService);
  private modalService = inject(ModalService);

  isUpdatingName = this.modalService.showModal;

  onRemoveList(listId: string) {
    this.shoppingListService.removeList(listId);
  }

  onRemoveListItem(listId: string, itemName: string) {
    this.shoppingListService.removeListItem(listId, itemName);
  }

  onUpdateName() {
    this.modalService.show();
  }

  onAddItem(listId: string, item: string) {
    this.shoppingListService.addListItem(listId, item);
    this.enteredItem = '';
  }
}
