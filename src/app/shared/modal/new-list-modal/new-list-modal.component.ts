import { Component, EventEmitter, inject, Output, signal } from '@angular/core';

import { ShoppingListsService } from '../../../shopping-list/shopping-lists.service';
import { ModalComponent } from '../modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-list-modal',
  imports: [ModalComponent, FormsModule],
  templateUrl: './new-list-modal.component.html',
  styleUrl: './new-list-modal.component.css',
})
export class NewListModalComponent {
  @Output() isAdding = new EventEmitter();
  enteredName = signal('');

  private shoppingListsService = inject(ShoppingListsService);

  onSubmit() {
    this.shoppingListsService.addList({
      name: this.enteredName(),
    });
    this.isAdding.emit();
  }

  onCloseModal() {
    this.isAdding.emit();
  }
}
