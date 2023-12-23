import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryControllerService, CategoryShowDto } from "../../../openapi-client";
import Swal from 'sweetalert2';
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";

// Component to display and manage the list of categories
@Component({
  selector: 'pm-category-list',
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule,
    MatButtonModule,
  ],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  allCategories: CategoryShowDto[] = []; // Array to hold categories
  columnNames: string[] = ['name', 'id', 'action']; // Column names for mat-table

  constructor(
    private categoryControllerService: CategoryControllerService, // Service for category operations
    private router: Router // Angular's Router for navigation
  ) {}

  ngOnInit(): void {
    this.getAllCategories(); // Fetch all categories on init
  }

  // Method to fetch all categories
  getAllCategories(): void {
    this.categoryControllerService.getAllCategories().subscribe({
      next: (categories) => this.allCategories = categories,
      error: (error) => Swal.fire('Error!', 'There was a problem fetching categories.', 'error')
    });
  }

  // Method to navigate to edit category page
  editCategory(categoryId: number): void {
    this.router.navigate(['/category/list', categoryId]);
  }

  // Method to handle category deletion with confirmation
  deleteCategory(categoryId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryControllerService.deleteCategoryById(categoryId).subscribe({
          next: () => {
            this.allCategories = this.allCategories.filter(category => category.id !== categoryId);
            Swal.fire('Deleted!', 'Your category has been deleted.', 'success');
          },
          error: () => Swal.fire('Error!', 'There was an error deleting the category.', 'error')
        });
      }
    });
  }

  // Method to navigate to create category page
  onCreate(): void {
    this.router.navigate(['/category/list']);
  }
}
