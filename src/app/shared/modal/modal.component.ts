import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingListsService } from '../../shopping-list/shopping-lists.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  imports: [FormsModule],
})
export class ModalComponent implements AfterViewInit {
  enteredName = signal('');
  private shoppingListsService = inject(ShoppingListsService);

  private dialogEl =
    viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  ngAfterViewInit(): void {
    this.dialogEl().nativeElement.showModal();
  }

  onSubmit() {
    this.shoppingListsService.addList({
      name: this.enteredName(),
    });
    this.dialogEl().nativeElement.close();
  }
}
