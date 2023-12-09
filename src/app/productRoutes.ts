import {Routes} from "@angular/router";
import {ProductsCreateComponent} from "./pages/products/products-create/products-create.component";
import {ProductsDetailComponent} from "./pages/products/products-detail/products-detail.component";

export let productRoutes: Routes = [{

  path: 'create',
  loadComponent: () => import("./pages/products/products-create/products-create.component").then(val => val.ProductsCreateComponent)},
  // component: ProductsCreateComponent},
  {
  path:'detail',
    loadComponent: () => import("./pages/products/products-detail/products-detail.component").then(val => val.ProductsDetailComponent)
    // component:ProductsDetailComponent

}];
