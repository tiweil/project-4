import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  public product: ProductModel;//props


//create new event
@Output()
public deleteMe = new EventEmitter<string>();


//report to father what you sent him
//בלחיצה על הכפתורת יעלה ארוע 
public async deleteProduct() {
  this.deleteMe.emit(this.product._id);
}


}