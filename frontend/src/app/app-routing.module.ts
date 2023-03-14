import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { LayoutAdminComponent } from './components/admin-area/layout-admin/layout-admin.component';
import { MenuAdminComponent } from './components/admin-area/menu-admin/menu-admin.component';
import { PageNotFoundComponent } from './components/admin-area/page-not-found/page-not-found.component';
import { LoginMainComponent } from './components/login-area/login-main/login-main.component';
import { LoginComponent } from './components/login-area/login/login.component';
import { RegisterComponent } from './components/login-area/register/register.component';
import { AddProductComponent } from './components/product-area/add-product/add-product.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { LayoutUserComponent } from './components/user-area/header-user/layout-user/layout-user.component';
import { ProductListUserComponent } from './components/product-user-area/product-list-user/product-list-user.component';
import { OrderComponent } from './components/order-area/order/order.component';

const routes: Routes = [
  { path:"login-main", component: LoginMainComponent },
  { path:"layout-admin", component: LayoutAdminComponent },
  { path:"layout-user", component: LayoutUserComponent},
  { path: "main", component: MenuAdminComponent, outlet: "mainLogin" },
  { path:"login", component: LoginComponent },
  { path:"home", component: HomeComponent },
  { path:"products", component: ProductListComponent },
  { path:"products/user", component:ProductListUserComponent},
  { path:"register", component: RegisterComponent },
  { path:"products/new", component: AddProductComponent },
  { path:"about", component: AboutComponent },
  { path:"order", component:OrderComponent},
  { path:"" , redirectTo:"/home", pathMatch: "full" },
  { path:"*" , component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
