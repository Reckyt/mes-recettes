import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  imports: [CommonModule],
})
export class ButtonComponent {
  title = input<string>();
  type = input<string>();
  width = input<string>();
  noMargin = input<boolean | undefined>();

  @Output() action = new EventEmitter();

  onClick() {
    this.action.emit();
  }

  getButtonWidth() {
    return this.width() ? this.width() : 20;
  }

  getButtonMargin(): string {
    return this.noMargin() ? '0' : '1rem';
  }
}
