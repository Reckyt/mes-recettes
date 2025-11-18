import { Injectable } from '@angular/core';

import { Tag } from '../model/recipe';
import { tags } from '../../asset/tagsList';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private tags: Tag[] = tags;
  constructor() {
    const tags = localStorage.getItem('tags');

    if (tags) {
      this.tags = JSON.parse(tags);
    }
  }

  getTags() {
    return this.tags;
  }
}
