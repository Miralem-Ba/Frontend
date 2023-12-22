// Import the Angular router module and necessary components
import {Routes} from "@angular/router";

// Import components for various category-related functionalities
import {CategoryListComponent} from "./pages/category/category-list/category-list.component";
import {CategoryCreateComponent} from "./pages/category/category-create/category-create.component";
import {CategoryEditIdComponent} from "./pages/category/category-edit-id/category-edit-id.component";

// Import the authentication guard for protected routes
import {authGuard} from "./gutar/auth.guard";

/**
 * Define the routes for category-related pages in the application.
 * These routes handle various functionalities like listing, creating,
 * editing, and viewing details of categories.
 */
export let categoryRoutes: Routes = [
  {
    // Route for listing all categories
    path: 'list',
    // Dynamically load the CategoryListComponent when the route is activated
    loadComponent: () => import("./pages/category/category-list/category-list.component").then(val => val.CategoryListComponent),
    // component: CategoryListComponent
  },
  {
    // Route for creating a new category
    path: 'create',
    // Dynamically load the CategoryCreateComponent when the route is activated
    canActivate: [authGuard],

    loadComponent: () => import("./pages/category/category-create/category-create.component").then(val => val.CategoryCreateComponent),
    // component: CategoryCreateComponent,
    // Protect this route with the authGuard
    canActivateChild:[authGuard],
  },
  {
    // Route for editing a specific category by its ID
    path: 'edit/:id',
    // Dynamically load the CategoryEditIdComponent for editing
    loadComponent: () => import("./pages/category/category-edit-id/category-edit-id.component").then(val => val.CategoryEditIdComponent),
    // component: CategoryEditIdComponent
  }
];
