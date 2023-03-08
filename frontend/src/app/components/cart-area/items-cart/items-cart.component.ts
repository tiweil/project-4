import { Component, OnInit  } from '@angular/core';
import { CartModel } from 'src/app/models/cart.model';
import { ClientModel } from 'src/app/models/client.model';
import { ItemModel } from 'src/app/models/item.model';
import { ProductModel } from 'src/app/models/product.model';
import { clientStore } from 'src/app/redux/login-state';
import { ItemService } from 'src/app/services/item.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-items-cart',
  templateUrl: './items-cart.component.html',
  styleUrls: ['./items-cart.component.css']
})
export class ItemsCartComponent implements OnInit {
  
public client: ClientModel;
public myCart: CartModel;
public items: ItemModel[];

constructor(private itemService: ItemService, private loginService: LoginService) {}


public async ngOnInit() {

}

public productItem: string;
public async itemToCart() {
try {
  //this.client = clientStore.getState().client;
  this.myCart = clientStore.getState().cart;
//listening to changes
clientStore.subscribe(() => {
  //this.client = clientStore.getState().client;
  this.myCart = clientStore.getState().cart;
  })
this.items = await this.itemService.itemsByCart(this.myCart._id);

this.productItem = this.items[0].productId;
  console.log(this.items[0].productId);
  } catch (error) {
  console.log(error);
}
}
}

