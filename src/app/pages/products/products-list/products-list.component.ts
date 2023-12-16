import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {ProductControllerService, ProductShowDto} from "../../../openapi-client";
import {ShowAsAdminDirective} from "../../../directives/show-as-admin.directive";

@Component({
  selector: 'pm-products-list',
  standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatTableModule, ShowAsAdminDirective],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products: Array<ProductShowDto> = [];
  columnDefinition: string[] = ['name','id','price','stock','image','sku','action'];

  constructor(private  readonly productControllerService: ProductControllerService) {
    this.productControllerService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }
}
