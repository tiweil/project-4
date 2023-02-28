import { Component, OnInit  } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-items-cart',
  templateUrl: './items-cart.component.html',
  styleUrls: ['./items-cart.component.css']
})
export class ItemsCartComponent implements OnInit {

public items: ItemModel[];

constructor(private itemService: ItemService) {}


public async ngOnInit() {
  this.items = await this.itemService.itemsByCart();
  }

public async itemToCart() {
try {
  console.log("work");
} catch (error) {
  
}
}
}
