import { Component, inject } from '@angular/core';

import { ItemCardComponent } from '../shared/item-card/item-card.component';
import { ShoppingListsService } from './shopping-lists.service';
import { ModalComponent } from '../shared/modal/modal.component';
import { NoListComponent } from './no-list/no-list.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-shopping-list',
  imports: [ItemCardComponent, ModalComponent, NoListComponent, ListComponent],
  templateUrl: './shopping-lists.component.html',
  styleUrl: './shopping-lists.component.css',
})
export class ShoppingListsComponent {
  selectedListId?: string;
  isAddingList: boolean = false;
  private shoppingListsService = inject(ShoppingListsService);

  get lists() {
    return this.shoppingListsService.getLists();
  }

  onSelectedList(id: string) {
    this.selectedListId = id;
  }

  get selectedList() {
    return this.lists.find((list) => list.id === this.selectedListId);
  }

  onAddList() {
    this.isAddingList = !this.isAddingList;
  }
}
