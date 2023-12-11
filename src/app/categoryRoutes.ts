// Import the Angular router module and necessary components
import {Routes} from "@angular/router";

// Import components for various category-related functionalities
import {CategoryListComponent} from "./pages/category/category-list/category-list.component";
import {CategoryCreateComponent} from "./pages/category/category-create/category-create.component";
import {CategoryEditIdComponent} from "./pages/category/category-edit-id/category-edit-id.component";
import {CategoryIdComponent} from "./pages/category/category-id/category-id.component";
import {DetailComponent} from "./pages/category/detail/detail.component";
import {ModifyComponent} from "./pages/category/modify/modify.component";

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
    loadComponent: () => import("./pages/category/category-create/category-create.component").then(val => val.CategoryCreateComponent),
    // component: CategoryCreateComponent,
    // Protect this route with the authGuard
    canActivate: [authGuard]
  },
  {
    // Route for editing a specific category by its ID
    path: 'edit/:id',
    // Dynamically load the CategoryEditIdComponent for editing
    loadComponent: () => import("./pages/category/category-edit-id/category-edit-id.component").then(val => val.CategoryEditIdComponent),
    // component: CategoryEditIdComponent
  },
  {
    // Route for viewing a specific category by its ID
    path: ":id",
    // Dynamically load the CategoryIdComponent for viewing
    loadComponent: () => import("./pages/category/category-id/category-id.component").then(val => val.CategoryIdComponent),
    // component: CategoryIdComponent
  },
  {
    // Route for viewing details of a category
    path: "detail",
    // Dynamically load the DetailComponent
    loadComponent: () => import("./pages/category/detail/detail.component").then(val => val.DetailComponent),
    // component: DetailComponent
  },
  {
    // Route for modifying a category (general purpose)
    path: "modify",
    // Dynamically load the ModifyComponent
    loadComponent: () => import("./pages/category/modify/modify.component").then(val => val.ModifyComponent),
    // component: ModifyComponent
  }
];
