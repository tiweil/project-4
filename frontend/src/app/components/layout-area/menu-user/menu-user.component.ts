import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { ProductModel } from 'src/app/models/product.model';
import { ItemService } from 'src/app/services/item.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {
  public categories: CategoryModel[];
  public products: ProductModel[];
  public searchTerm: string;
  public isExist:boolean=true;
  public temp:ProductModel[]=[];

  //DI= Dependency Injection, we get object kind of service
  //angular inject object by constructor to this component
  constructor(private productService: ProductService, private itemService: ItemService) {}

  public async ngOnInit() {
    try {
      this.products = await this.productService.getAllProducts();

      // this.categories=await this.productService.getAllCategory();
    } catch (err) {
      alert(err);
    }
  }
  public async sortByCategory(data:any) {
    this.products = await this.productService.getAllProducts();
    console.log("function is working",data._id)
    if(data=='all'){
      this.temp=this.products;
    }else{
      this.products.map((item)=>{
        console.log(item.categoryId)
        // if(item.categoryId===data){
        //   temp.push(item);
        //   console.log(item);
        // }
      })
    }
    // this.products=temp;
    console.log(this.products);
  }

  public searchItem(data:string){
    this.temp=this.products.filter(item=>{return item.name.includes(data)});
    console.log(this.temp.length)
    if(this.temp.length==0){
      this.isExist=false;
    }else{
      this.isExist=true;
    }
  }
}
