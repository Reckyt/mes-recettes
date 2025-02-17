import { Component, inject, Input } from '@angular/core';

import { ShoppingListsService } from '../shopping-lists.service';
import { List } from '../../model/list';
import { UpdateListNameModalComponent } from '../../shared/modal/update-list-name-modal/update-list-name-modal.component';
import { ModalService } from '../../shared/modal.service';
import { FormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from '../../shared/modal/confirmation-modal/confirmation-modal.component';
import { InputCheckboxComponent } from '../../shared/input-checkbox/input-checkbox.component';

@Component({
  selector: 'app-list',
  imports: [
    UpdateListNameModalComponent,
    ConfirmationModalComponent,
    FormsModule,
    InputCheckboxComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() list!: List;
  enteredItem = '';
  actionModal = '';

  private shoppingListService = inject(ShoppingListsService);
  private modalService = inject(ModalService);

  isOpeningModal = this.modalService.showModal;

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
