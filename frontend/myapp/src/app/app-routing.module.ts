import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';

const routes: Routes = [
  { path:"home", component: HomeComponent },
  { path:"products", component: ProductListComponent },
  { path:"products/new", component: AboutComponent },
  { path:"about", component: AboutComponent },
  { path:"" , redirectTo:"/home", pathMatch: "full" },
  { path:"*" , component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
