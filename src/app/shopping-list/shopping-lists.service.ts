import { Injectable } from '@angular/core';

import { List, NewListData } from '../model/list';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListsService {
  private lists: List[] = [];

  constructor() {
    const lists = localStorage.getItem('lists');

    if (lists) {
      this.lists = JSON.parse(lists);
    }
  }

  getLists() {
    return this.lists;
  }

  getList(listId: string) {
    return this.lists.filter((list) => list.id === listId);
  }

  addList(listData: NewListData) {
    this.lists.push({
      id: new Date().getTime().toString(),
      name: listData.name,
      itemNumber: 0,
      item: [],
    });
    this.saveList();
  }

  removeList(id: string) {
    this.lists = this.lists.filter((list) => list.id !== id);
    this.saveList();
  }

  updateListName(id: string, newName: string) {
    this.lists = this.lists.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          name: newName,
        };
      }
      return list;
    });
    this.saveList();
  }

  addItemsToList(listId: string, items: string | string[]) {
    this.lists = this.lists.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          item: [...list.item, ...(Array.isArray(items) ? items : [items])],
        };
      }
      return list;
    });
    this.saveList();
  }

  addListItem(listId: string, item: string) {
    this.addItemsToList(listId, item);
  }

  addListItemsFromRecipe(listId: string, items: string[]) {
    this.addItemsToList(listId, items);
  }

  removeListItem(listId: string, item: string) {
    this.lists = this.lists.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          item: list.item.filter((itemList) => itemList !== item),
        };
      }
      return list;
    });
    this.saveList();
  }

  updateItemName(listId: string, newName: string, index: number) {
    this.lists = this.lists.map((list) => {
      if (list.id === listId && list.item[index]) {
        list.item[index] = newName;
      }
      return list;
    });
    this.saveList();
  }

  private saveList() {
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }
}
