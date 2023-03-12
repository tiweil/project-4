import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { AddProductComponent } from './components/product-area/add-product/add-product.component';
import { CartComponent } from './components/cart-area/cart/cart.component';
import { OrderComponent } from './components/order-area/order/order.component';
import { ProductCardComponent } from './components/product-area/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { EmptyCartComponent } from './components/cart-area/empty-cart/empty-cart.component';
import { UpdateCartComponent } from './components/cart-area/update-cart/update-cart.component';
import { LoginComponent } from './components/login-area/login/login.component';
import { ContactUsComponent } from './components/about-area/contact-us/contact-us.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/login-area/register/register.component';
import { ItemsCartComponent } from './components/cart-area/items-cart/items-cart.component';
import { LoginMenuComponent } from './components/login-area/login-menu/login-menu.component';
import { LayoutAdminComponent } from './components/layout-area/layout-admin/layout-admin.component';
import { MenuAdminComponent } from './components/layout-area/menu-admin/menu-admin.component';
import { LoginMainComponent } from './components/login-area/login-main/login-main.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductListComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    AddProductComponent,
    CartComponent,
    OrderComponent,
    ProductCardComponent,
    EmptyCartComponent,
    UpdateCartComponent,
    LoginComponent,
    ContactUsComponent,
    FooterComponent,
    RegisterComponent,
    ItemsCartComponent,
    LoginMenuComponent,
    LayoutAdminComponent,
    MenuAdminComponent,
    LoginMainComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//Two way binding
    HttpClientModule, //http
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LoginMainComponent]
})
export class AppModule { }
