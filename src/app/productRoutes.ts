// Import necessary Angular router and components
import {Routes} from "@angular/router";

// Import components for product creation, details, and list views
import {ProductsCreateComponent} from "./pages/products/products-create/products-create.component";
import {ProductsDetailComponent} from "./pages/products/products-detail/products-detail.component";

// Import the authentication guard for route protection
import {authGuard} from "./gutar/auth.guard";
import {ProductsListComponent} from "./pages/products/products-list/products-list.component";

/**
 * Define the routes for product-related pages in the application.
 * Each route is mapped to a specific component.
 */
export let productRoutes: Routes = [{
  // Route for listing products
  path: 'list',
  // Dynamically load the ProductsListComponent when the route is activated
  loadComponent:() => import("./pages/products/products-list/products-list.component").then(val => val.ProductsListComponent),
  // component: ProductsListComponent},
},
  {
    // Route for creating a new product
  path: 'create',
    // Dynamically load the ProductsCreateComponent when the route is activated
  loadComponent: () => import("./pages/products/products-create/products-create.component").then(val => val.ProductsCreateComponent),
  // component: ProductsCreateComponent},
    // Protect this route with the authGuard to ensure only authenticated users can access
  canActivate: [authGuard]
},
  {
    // Route for displaying details of a specific product
  path:'detail',
    // Dynamically load the ProductsDetailComponent when the route is activated
    loadComponent: () => import("./pages/products/products-detail/products-detail.component").then(val => val.ProductsDetailComponent),
    // component:ProductsDetailComponent
}];
