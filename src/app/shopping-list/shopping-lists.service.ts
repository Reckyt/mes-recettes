import { Injectable } from '@angular/core';

import { List, NewListData } from '../model/list';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListsService {
  private lists: List[] = [];
  // private lists = signal<List[]>([]);

  constructor() {
    const lists = localStorage.getItem('lists');

    if (lists) {
      this.lists = JSON.parse(lists);
    }
  }

  getLists() {
    return this.lists;
  }

  addList(listData: NewListData) {
    this.lists.push({
      id: new Date().getTime().toString(),
      name: listData.name,
      itemNumber: 10,
    });
    this.saveList();
  }

  removeList(id: string) {}

  updateList() {}

  private saveList() {
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }
}
