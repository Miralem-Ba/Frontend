import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryControllerService, CategoryShowDto} from "../../../openapi-client";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {ShowAsAdminDirective} from "../../../directives/show-as-admin.directive";

@Component({
  selector: 'pm-category-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTableModule, MatButtonModule, ShowAsAdminDirective],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  columnNames: string[] = ['name', 'id','action'];
  allCategories: CategoryShowDto[] = [];
  constructor(
    private categoryControllerService: CategoryControllerService){
    this.categoryControllerService.getAllCategories().subscribe(categories => {
      this.allCategories = categories;
    })
    }
}
