import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pm-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Bücher' },
    // weitere Kategorien
  ];

  createCategory(categoryNameInput: HTMLInputElement): void {
    const newCategory = { id: this.categories.length + 1, name: categoryNameInput.value };
    this.categories.push(newCategory);

    // Reset the input field
    categoryNameInput.value = '';
  }
}
