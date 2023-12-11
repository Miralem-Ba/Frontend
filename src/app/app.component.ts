// Import core Angular decorators and common modules
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Angular router modules and components
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';

// Import custom components for the application layout
import {FooterComponent} from "./elements/footer/footer.component";
import {HeaderComponent} from "./elements/header/header.component";

/**
 * The AppComponent acts as the root component for the application.
 * This component is marked as standalone, allowing it to be bootstrapped
 * without the need for an @NgModule.
 */
@Component({
  selector: 'pm-root', // The custom HTML tag to represent this component
  standalone: true, // Enables the standalone mode for the component
  imports: [
    CommonModule, // Provides common directives like ngIf, ngFor
    RouterModule, // Required for routing functionalities within the component
    FooterComponent, // Custom footer component
    HeaderComponent, // Custom header component
    RouterLink // Directive for linking to routes
  ],
  templateUrl: './app.component.html', // The HTML template for the component
  styleUrl: './app.component.scss' // The SCSS stylesheet for the component
})
export class AppComponent {
  title = 'product-manager-frontend'; // Title property used in the template
  // constructor(
    // private readonly productControllerService: ProductControllerService,
    // private readonly categoryControllerService: CategoryControllerService,
    // private readonly userControllerService: UserControllerService
  // ) {
  //   this.productControllerService.getAllProducts().subscribe((products: any) => {
  //     this.productControllerService.createProduct;
  //     this.categoryControllerService.createProduct;
  //     this.userControllerService.createProduct;

    // })
  // }
}
