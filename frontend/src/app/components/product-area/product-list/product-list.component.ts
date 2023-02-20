import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products: ProductModel[];

  //DI= Dependency Injection, we get object kind of service 
  //angular inject object by constructor to this component
  constructor(private productService: ProductService) {}

  public async getAll(args:Event){
    this.products = await this.productService.getAllProducts();
    console.log(args);
    
    console.log(this.products);
    
  }
  
}
