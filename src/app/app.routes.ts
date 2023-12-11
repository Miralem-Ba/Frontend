// Import necessary Angular modules and components
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

// Import authentication related components
import {LoginComponent} from './pages/auth/login/login.component';
import {RegisterComponent} from './pages/auth/register/register.component';

// Import routes for categories and products
import {categoryRoutes} from "./categoryRoutes";
import {productRoutes} from "./productRoutes";

/**
 * Define the main application routes.
 * This includes specific routes for categories, products, and authentication.
 */
export const routes: Routes = [
  {
    // Define the base path for category-related routes
    path: 'categories',
    // Include the category specific routes defined in categoryRoutes
    children: categoryRoutes
  },
  {
    // Define the base path for product-related routes
    path: 'products',
    // Include the product specific routes defined in productRoutes
    children: productRoutes
  },
  {
    // Route for user login
    path: 'login',
    component: LoginComponent
  },
  {
    // Route for user registration
    path: 'register',
    component: RegisterComponent
  },
];

/**
 * The AppRoutingModule module that sets up the router configuration for the application.
 * It imports RouterModule with the defined routes and exports RouterModule
 * so it can be used throughout the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
