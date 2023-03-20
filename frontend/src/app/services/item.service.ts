import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { appConfig } from 'src/utils/app-config';
import { ItemModel } from '../models/item.model';
import { CartModel } from '../models/cart.model';
import { clientStore } from '../redux/login-state';
import { ItemActionType, itemStore } from '../redux/item-state';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

constructor(private http: HttpClient) { }

public async AddItemToCart(item:ItemModel): Promise<any> {
  const checkCart = clientStore.getState().cart;
  if(checkCart){
  const observable = this.http.post<ItemModel>(appConfig.addItemUrl, item);
  const addItem = await firstValueFrom(observable);
  itemStore.dispatch({ type: ItemActionType.AddItem, payload: item })
  return addItem;
  }
  else{
    alert("you have to login, before start shopping")
  }
}

public async itemsByCart(cartId: string): Promise<ItemModel[]> {
    // get the observable
  const observable = this.http.get<ItemModel[]>(appConfig.itemsByCart + cartId);
    //convert to promise
  const products = await firstValueFrom(observable);

  return products;
  }
  public async deleteItem(id: string): Promise<ItemModel[]> {
    console.log("id:"+id);
    const observable = this.http.delete<ItemModel[]>(appConfig.deleteItemUrl + id);
    const products=await firstValueFrom(observable);
    return products;
    }
  //get all carts
  public async getAllCarts(): Promise<CartModel[]> {

    // get the observable
    const observable = this.http.get<CartModel[]>(appConfig.getAllCart);
    //convert to promise
    const carts = await firstValueFrom(observable);

  return carts;
  }
    //delete all items
    public async deleteAllItems(cart_id: string): Promise<void> {
      console.log("id:"+cart_id);
      const observable = this.http.delete<ItemModel>(appConfig.deleteAllItems + cart_id);
      await firstValueFrom(observable);
      itemStore.dispatch({ type: ItemActionType.DeleteAll, payload:cart_id  })
      }
          //update item
    public async updateItem(item: ItemModel): Promise<void> {

      const observable = this.http.patch<ItemModel>(appConfig.updateItemUrl + item._id, item);
      await firstValueFrom(observable);
      itemStore.dispatch({ type: ItemActionType.UpdateItem, payload: item })
    }
}


//delete item

