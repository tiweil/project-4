import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { ItemModel } from 'src/app/models/item.model';
import { ProductModel } from 'src/app/models/product.model';
import { clientStore } from 'src/app/redux/login-state';
import { ItemService } from 'src/app/services/item.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-user',
  templateUrl: './product-list-user.component.html',
  styleUrls: ['./product-list-user.component.css']
})
export class ProductListUserComponent implements OnInit {

  public products: ProductModel[];
  public temp:ProductModel[]=[];
  public isExist:boolean=true;

  // onSearch() {
  //   // this.products.map((item)=>{
  //   //   if( item.name.includes(this.searchTerm)){
  //   //     this.temp.push(item);
  //   //   }
  //   // })
  //   console.log(this.searchTerm);
  //   this.temp = this.products.filter(item => {
  //     console.log(item.name)
  //     return (item.name.includes(this.searchTerm));
  //   });
  //   this.products=this.temp;
  //   console.log(this.temp);
  // }


  //DI= Dependency Injection, we get object kind of service
  //angular inject object by constructor to this component
  constructor(private productService: ProductService, private itemService: ItemService) {}

  public async ngOnInit() {
    try {
      this.products = await this.productService.getAllProducts();
    } catch (err) {
      alert(err);
    }
  }

  public newItem: ItemModel;
public async addToCart(product: ProductModel) {
  console.log(product);
  this.newItem={productId:product._id,
                qty:1,
                total_price:product.price,
                cartId:clientStore.getState().cart._id
  }
  console.log( this.newItem);

  try {
    if(!window.confirm("Are you sure?")) return;
    await this.itemService.AddItemToCart(this.newItem);
    alert("Product has been add to your cart");
  } catch (err) {
    alert(err);
  }
}

}
