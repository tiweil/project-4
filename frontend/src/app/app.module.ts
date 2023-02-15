import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { AddProductComponent } from './components/product-area/add-product/add-product.component';
import { CartComponent } from './components/cart-area/cart/cart.component';
import { OrderComponent } from './components/order-area/order/order.component';
import { ProductCardComponent } from './components/product-area/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CartProductsComponent } from './components/cart-area/cart-products/cart-products.component';
import { EmptyCartComponent } from './components/cart-area/empty-cart/empty-cart.component';
import { UpdateCartComponent } from './components/cart-area/update-cart/update-cart.component';
import { LoginComponent } from './components/login-area/login/login.component';
import { RegisterComponent } from './components/login-area/register/register.component';
import { ContactUsComponent } from './components/about-area/contact-us/contact-us.component';
import { MainAdminComponent } from './components/adminarea/main-admin/main-admin.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    ProductListComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    AddProductComponent,
    CartComponent,
    OrderComponent,
    ProductCardComponent,
    CartProductsComponent,
    EmptyCartComponent,
    UpdateCartComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    MainAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //http
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
