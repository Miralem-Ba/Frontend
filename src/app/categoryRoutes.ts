import {Routes} from "@angular/router";
import {CategoryListComponent} from "./pages/category/category-list/category-list.component";
import {authGuard} from "./gutar/auth.guard";
import {CategoryCreateComponent} from "./pages/category/category-create/category-create.component";
import {CategoryEditIdComponent} from "./pages/category/category-edit-id/category-edit-id.component";
import {CategoryIdComponent} from "./pages/category/category-id/category-id.component";

export let categoryRoutes: Routes = [
  {
    path: 'list',
    loadComponent: () => import("./pages/category/category-list/category-list.component").then(val => val.CategoryListComponent),
    // component: CategoryListComponent
  },
  {
    path: 'create',
    loadComponent: () => import("./pages/category/category-create/category-create.component").then(val => val.CategoryCreateComponent),
    // component: CategoryCreateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'edit/:id',
    loadComponent: () => import("./pages/category/category-edit-id/category-edit-id.component").then(val => val.CategoryEditIdComponent),
    // component: CategoryEditIdComponent
  },
  {
    path: ":id",
    loadComponent: () => import("./pages/category/category-id/category-id.component").then(val => val.CategoryIdComponent),
    // component: CategoryIdComponent
  }
];
