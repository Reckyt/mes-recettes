// import { Component, EventEmitter, Input, Output } from '@angular/core';

// import { Tag } from '../model/recipe';
// import { TagComponent } from './tag/tag.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-tags',
//   templateUrl: './tags.component.html',
//   styleUrl: './tags.component.css',
//   imports: [TagComponent, CommonModule],
// })
// export class TagsComponent {
//   @Input() tag!: Tag;
//   @Input() isSelected: boolean = false;
//   @Output() selectionChange = new EventEmitter<Tag>();

//   toggleSelection() {
//     console.log('🔥💧  toggleSelection:');
//     this.isSelected = !this.isSelected;
//     this.selectionChange.emit(this.tag);
//   }
// }
