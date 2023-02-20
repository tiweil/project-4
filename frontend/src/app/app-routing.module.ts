import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login-area/login/login.component';
import { RegisterComponent } from './components/login-area/register/register.component';
import { AddProductComponent } from './components/product-area/add-product/add-product.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';

const routes: Routes = [
{ path:"login", component: LoginComponent },
  { path:"layout", component: LayoutComponent },
  { path:"home", component: HomeComponent },
  
  { path:"products", component: ProductListComponent },
  { path:"register", component: RegisterComponent },
  { path:"products/new", component: AddProductComponent },
  { path:"about", component: AboutComponent },
  { path:"" , redirectTo:"/home", pathMatch: "full" },
  { path:"*" , component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
