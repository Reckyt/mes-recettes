import { Component, EventEmitter, inject, input, Output } from '@angular/core';

import { ModalComponent } from '../modal.component';
import { ModalService } from '../../modal.service';
import { ButtonComponent } from '../../button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmation-modal',
  imports: [ModalComponent, ButtonComponent, FormsModule],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.css',
})
export class ConfirmationModalComponent {
  title = input<string>();

  @Output() confirm = new EventEmitter();

  private modalService = inject(ModalService);

  onCloseModal() {
    this.modalService.hide();
  }

  onSubmit() {
    this.confirm.emit();
    this.onCloseModal();
  }
}
