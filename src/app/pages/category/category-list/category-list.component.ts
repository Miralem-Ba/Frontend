import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import {
  CategoryControllerService,
  CategoryShowDto,
  CategoryUpdateDto
} from "../../../openapi-client";

@Component({
  selector: 'pm-category-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTableModule, MatButtonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  columnNames: string[] = ['name', 'id', 'action'];
  allCategories: CategoryShowDto[] = [];

  constructor(
    private categoryControllerService: CategoryControllerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoryControllerService.getAllCategories().subscribe(categories => {
      this.allCategories = categories;
    }, error => {
      console.error('Error fetching categories:', error);
    });
  }

  createCategory(): void {
    this.router.navigate(['/category/create']);
  }

  editCategory(categoryId: number): void {
    this.router.navigate(['/category/edit', categoryId]);
  }

  updateCategory(category: CategoryShowDto): void {
    const updatePayload: CategoryUpdateDto = {
      // Sie müssen die Eigenschaften von CategoryShowDto auf CategoryUpdateDto abbilden
      name: category.name,
      active: true // Dies ist ein Beispielwert
    };

    this.categoryControllerService.updateCategoryById(category.id, updatePayload).subscribe(() => {
      Swal.fire('Success', 'Category updated successfully', 'success');
      this.getAllCategories();
    }, error => {
      console.error('Error updating category:', error);
    });
  }

  deleteCategory(categoryId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.value) {
        this.categoryControllerService.deleteCategoryById(categoryId).subscribe(() => {
          Swal.fire('Deleted!', 'Category has been deleted.', 'success');
          this.getAllCategories();
        }, error => {
          console.error('Error deleting category:', error);
        });
      }
    });
  }
}
