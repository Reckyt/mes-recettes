import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  placeholder = input<string>();
  @Output() searchInputChange = new EventEmitter<string>();

  searchInput: string = '';

  onInputChange() {
    this.searchInputChange.emit(this.searchInput);
  }

  clearField() {
    this.searchInput = '';
    this.searchInputChange.emit(this.searchInput);
  }
}
