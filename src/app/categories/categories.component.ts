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
    // ... weitere Kategorien ...
  ];

  createCategory(name: string) {
    const newCategory = { id: this.categories.length + 1, name: name };
    this.categories.push(newCategory);
    // Hier würden Sie normalerweise den Service aufrufen, um die Kategorie zu speichern
  }
}
