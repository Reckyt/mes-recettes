import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ShoppingListsService } from '../../shopping-list/shopping-lists.service';

@Component({
  selector: 'app-input-checkbox',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input-checkbox.component.html',
  styleUrl: './input-checkbox.component.css',
})
export class InputCheckboxComponent {
  item = input<string>();
  listId = input<string>();
  isUpdatingNameItem: boolean = false;

  @Output() delete = new EventEmitter();

  nameItem!: FormGroup;

  constructor(private fb: FormBuilder) {}
  private shoppingListsService = inject(ShoppingListsService);

  ngOnInit() {
    this.nameItem = this.fb.group({
      item: this.item(),
    });
  }

  onDelete() {
    this.delete.emit();
  }

  onUpdateNameItem() {
    this.isUpdatingNameItem = !this.isUpdatingNameItem;
  }

  getIndex() {
    if (this.listId) {
      const list = this.shoppingListsService.getList(this.listId()!);
      const index = list[0].item.findIndex(
        (element) => element === this.item()
      );
      return index;
    }

    return -1;
  }

  updateName() {
    if (this.listId) {
      const index = this.getIndex();
      this.shoppingListsService.updateItemName(
        this.listId()!,
        this.nameItem.value.item,
        index
      );
      this.isUpdatingNameItem = !this.isUpdatingNameItem;
    }
  }
}
