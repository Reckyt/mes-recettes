import { Component, inject, input, OnInit } from '@angular/core';

import { ModalComponent } from '../modal.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ModalService } from '../../modal.service';
import { ShoppingListsService } from '../../../shopping-list/shopping-lists.service';
import { List } from '../../../model/list';

@Component({
  selector: 'app-update-list-name-modal',
  imports: [ModalComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './update-list-name-modal.component.html',
  styleUrl: './update-list-name-modal.component.css',
})
export class UpdateListNameModalComponent implements OnInit {
  list = input<List>();
  private modalService = inject(ModalService);
  private shoppingListsService = inject(ShoppingListsService);
  private fb = inject(FormBuilder);

  listForm!: FormGroup;

  ngOnInit() {
    this.listForm = this.fb.group({
      name: this.list()!.name,
    });
  }

  onSubmit() {
    this.shoppingListsService.updateListName(
      this.list()!.id,
      this.listForm.value.name
    );
    this.modalService.hide();
  }

  onCloseModal() {
    this.modalService.hide();
  }
}
