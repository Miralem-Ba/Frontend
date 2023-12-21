import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductControllerService, ProductDetailDto } from "../../../openapi-client";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common'; // Correct import for Location service

@Component({
  selector: 'pm-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'] // Correct property name is 'styleUrls'
})
export class ProductsDetailComponent implements OnInit { // Implement OnInit
  product: ProductDetailDto | null = null;
  productId: number | null = null;

  constructor(
    private productControllerService: ProductControllerService,
    private activatedRoute: ActivatedRoute,
    private location: Location // Correctly injected Location service
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = +params['id']; // '+' converts the parameter to a number
      if (this.productId) {
        this.loadProduct();
      }
    });
  }

  loadProduct(): void {
    if (this.productId) {
      this.productControllerService.getProductById(this.productId).subscribe(
        (product) => {
          this.product = product;
          console.log(product);
        },
        (error) => {
          console.error('Error loading product:', error);
        }
      );
    }
  }

  navigateBack(): void {
    this.location.back();
  }
}
