import {Routes} from "@angular/router";
import {ProductsCreateComponent} from "./pages/products/products-create/products-create.component";
import {ProductsDetailComponent} from "./pages/products/products-detail/products-detail.component";
import {authGuard} from "./gutar/auth.guard";
import {ProductsListComponent} from "./pages/products/products-list/products-list.component";

export let productRoutes: Routes = [{
  path: 'list',
  loadComponent:() => import("./pages/products/products-list/products-list.component").then(val => val.ProductsListComponent),
  // component: ProductsListComponent},
},
  {
  path: 'create',
  loadComponent: () => import("./pages/products/products-create/products-create.component").then(val => val.ProductsCreateComponent),
  // component: ProductsCreateComponent},
  canActivate: [authGuard]
},
  {
  path:'detail',
    loadComponent: () => import("./pages/products/products-detail/products-detail.component").then(val => val.ProductsDetailComponent),
    // component:ProductsDetailComponent

}];
