import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pm-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 599.99 },

  ];

  createProduct(name: string, price: number) {
    const newProduct = { id: this.products.length + 1, name: name, price: price };
    this.products.push(newProduct);

  }

  protected readonly Number = Number;
}
