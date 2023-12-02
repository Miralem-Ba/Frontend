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
    // Sie können hier weitere Produkte hinzufügen.
  ];

  createProduct(productNameInput: HTMLInputElement, productPriceInput: HTMLInputElement): void {
    const newProduct = {
      id: this.products.length + 1,
      name: productNameInput.value,
      price: Number(productPriceInput.value)
    };
    this.products.push(newProduct);

    // Reset the input fields
    productNameInput.value = '';
    productPriceInput.value = '';
  }
}
