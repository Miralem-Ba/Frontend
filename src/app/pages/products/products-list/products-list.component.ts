import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { Router } from '@angular/router'; // Import Router for navigation
import { ProductControllerService, ProductShowDto } from "../../../openapi-client";
import { ShowAsAdminDirective } from "../../../directives/show-as-admin.directive";
import Swal from 'sweetalert2'; // Wenn Sie SweetAlert2 für Benachrichtigungen verwenden möchten

@Component({
  selector: 'pm-products-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTableModule, ShowAsAdminDirective],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Array<ProductShowDto> = [];
  columnDefinition: string[] = ['name','id','price','stock','image','sku','action'];

  constructor(
    private readonly productControllerService: ProductControllerService,
    private router: Router // Inject the router for navigation
  ) {
    this.productControllerService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  editProduct(productId: number): void {
    // Navigate to the product edit page with the product ID
    this.router.navigate(['/product/detail', productId]);
  }

  deleteProduct(productId: number): void {
    // Confirm before deletion
    Swal.fire({
      title: 'Are you sure you want to delete this product?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the service to delete the product
        this.productControllerService.deleteProductById(productId).subscribe({
          next: () => {
            // Remove the product from the list or refresh the list
            this.products = this.products.filter(product => product.id !== productId);
            Swal.fire('Deleted!', 'The product has been deleted.', 'success');
          },
          error: () => {
            Swal.fire('Failed!', 'There was an error deleting the product.', 'error');
          }
        });
      }
    });
  }

  createProduct(): void {
    // Navigate to the product creation page
    this.router.navigate(['/product/create']);
  }
}
