import { Component, Input, OnInit} from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductActionType, productsStore } from 'src/app/redux/product-state';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


@Input()
public item: ItemModel;

public products: ProductModel[] ;
public singleProduct: ProductModel[];
//public nameProduct: string;
constructor(private productService: ProductService) {


  //this.singleProduct = this.products.filter(p =>{ });
  //this.nameProduct = this.singleProduct[0].name;
}
public async ngOnInit() {
  this.products = productsStore.getState().products;
  console.log("all products"+this.products);
  this.item.qty = 1;
}
public onQuantityChange() {
  

  this.item.total_price = this.item.qty*this.singleProduct[0].price;

}








}
