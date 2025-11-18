import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _showModal = signal<boolean>(false);

  showModal = this._showModal.asReadonly();

  show() {
    this._showModal.set(true);
  }

  hide() {
    this._showModal.set(false);
  }
}
