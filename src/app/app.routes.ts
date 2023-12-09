import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './pages/auth/login/login.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {categoryRoutes} from "./categoryRoutes";
import {productRoutes} from "./productRoutes";


export const routes: Routes = [
  {
    path: 'categories',
    children: categoryRoutes
  },
  {
    path: 'products',
    children: productRoutes
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
