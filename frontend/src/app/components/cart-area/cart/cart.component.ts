import { Component, Input} from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  public selectQty: number;

@Input()
public item: ItemModel;





}
