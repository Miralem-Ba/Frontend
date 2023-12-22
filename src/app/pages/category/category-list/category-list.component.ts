import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryControllerService, CategoryShowDto } from "../../../openapi-client";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { Router } from '@angular/router'; // Import Router for navigation
import Swal from 'sweetalert2'; // Optional, for alerts

@Component({
  selector: 'pm-category-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTableModule, MatButtonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  columnNames: string[] = ['name', 'id', 'action'];
  allCategories: CategoryShowDto[] = [];

  constructor(
    private categoryControllerService: CategoryControllerService,
    private router: Router // Inject the Router
  ) {
    this.categoryControllerService.getAllCategories().subscribe(categories => {
      this.allCategories = categories;
    });
  }

  editCategory(categoryId: number): void {
    // Navigate to the category edit page with the category ID
    this.router.navigate(['/category/edit', categoryId]);
  }

  deleteCategory(categoryId: number): void {
    // Confirm before deletion
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if (result.value) {
        this.categoryControllerService.deleteCategoryById(categoryId).subscribe(() => {
          Swal.fire(
            'Deleted!',
            'The category has been deleted.',
            'success'
          );
          // Update the list of categories
          this.allCategories = this.allCategories.filter(c => c.id !== categoryId);
        }, error => {
          console.error('Error deleting the category:', error);
          Swal.fire(
            'Failed!',
            'There was an error deleting the category.',
            'error'
          );
        });
      }
    });
  }

  createCategory(): void {
    // Navigate to the category creation page
    this.router.navigate(['/category/create']);
  }
}
