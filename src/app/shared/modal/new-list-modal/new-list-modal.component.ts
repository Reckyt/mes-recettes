import {
  Component,
  EventEmitter,
  inject,
  input,
  Output,
  signal,
} from '@angular/core';

import { ShoppingListsService } from '../../../shopping-list/shopping-lists.service';
import { ModalComponent } from '../modal.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../button/button.component';
import { List } from '../../../model/list';

@Component({
  selector: 'app-new-list-modal',
  imports: [ModalComponent, FormsModule, ButtonComponent],
  templateUrl: './new-list-modal.component.html',
  styleUrl: './new-list-modal.component.css',
})
export class NewListModalComponent {
  enteredName = signal('');
  title = input<string>();

  @Output() isAdding = new EventEmitter();

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
