import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Tag } from '../../model/recipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css',
  imports: [CommonModule],
})
export class TagComponent {
  @Input() tag!: Tag;
  @Input() noEdit?: boolean;
  @Input() isSelected: boolean = false;
  @Output() selectionChange = new EventEmitter<Tag>();

  toggleSelection() {
    if (this.noEdit) {
      return;
    }
    this.isSelected = !this.isSelected;
    this.selectionChange.emit(this.tag);
  }
}
