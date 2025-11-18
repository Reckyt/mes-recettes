import { Component, inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ItemCardComponent } from '../shared/item-card/item-card.component';
import { ShoppingListsService } from './shopping-lists.service';
import { NoListComponent } from './no-list/no-list.component';
import { ListComponent } from './list/list.component';
import { NewListModalComponent } from '../shared/modal/new-list-modal/new-list-modal.component';
import { SearchInputComponent } from '../shared/search-input/search-input.component';

@Component({
  selector: 'app-shopping-list',
  imports: [
    ItemCardComponent,
    NewListModalComponent,
    NoListComponent,
    ListComponent,
    MatTooltipModule,
    SearchInputComponent,
  ],
  templateUrl: './shopping-lists.component.html',
  styleUrl: './shopping-lists.component.css',
})
export class ShoppingListsComponent {
  selectedListId?: string;
  isAddingList: boolean = false;
  searchInput: string = '';

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

  get filteredlists() {
    return this.lists.filter((list) =>
      list.name.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }

  onSearchInputChange(query: string) {
    this.searchInput = query;
  }
}
