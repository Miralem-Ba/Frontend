import {Component, signal} from '@angular/core';
import { Router } from '@angular/router';
import { ProductControllerService, ProductShowDto } from "../../../openapi-client";
import Swal from 'sweetalert2';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'pm-products-list',
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    // ... Ihre Importe ...
  ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Array<ProductShowDto> = [];
  columnDefinition: string[] = ['name','id','price','stock','image','sku','action'];
  constructor(
    private productControllerService: ProductControllerService,
    private router: Router
  ) {
    this.getAllProducts();
  }

  onEdit(id: number): void {
    // Hier navigieren Sie zur Bearbeitungsseite des Produkts
    this.router.navigate(['/product/edit', id]);
  }

  onDelete(id: number): void {
    // Bestätigungsdialog vor dem Löschen
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productControllerService.deleteProductById(id).subscribe({
          next: () => {
            // Aktualisieren Sie die Liste der Produkte, indem Sie das gelöschte Produkt herausfiltern
            this.products = this.products.filter(product => product.id !== id);
            Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
          },
          error: (error) => {
            Swal.fire('Error!', 'There was an error deleting the product.', 'error');
          }
        });
      }
    });
  }

  onCreate(): void {
    // Navigieren Sie zur Seite zum Erstellen eines neuen Produkts
    this.router.navigate(['/product/create']);
  }

  getAllProducts(): void {
    this.productControllerService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        Swal.fire('Error!', 'There was a problem fetching products.', 'error');
      }
    });
  }

  editProduct(productId: number): void {
    // Logic to handle editing a product
    this.router.navigate(['/product/edit', productId]);
  }

  deleteProduct(productId: number): void {
    // Logic to handle deleting a product
    // Confirm dialog, service call, etc.
  }

  createProduct(): void {
    // Logic to navigate to the product creation page
    this.router.navigate(['/product/create']);
  }
}
