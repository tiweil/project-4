import { Component, OnInit  } from '@angular/core';
import { async } from 'rxjs';
import { CartModel } from 'src/app/models/cart.model';
import { ClientModel } from 'src/app/models/client.model';
import { ItemModel } from 'src/app/models/item.model';
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
public async itemToCart() {
try {
  console.log("work");
  this.client = clientStore.getState().client;
  this.myCart = clientStore.getState().cart;
  //listening to changes
  clientStore.subscribe(() => {
    this.client = clientStore.getState().client;
  })
  this.items = await this.itemService.itemsByCart(this.client._id);
  console.log(this.items);
} catch (error) {
  console.log(error);
}
}
}

