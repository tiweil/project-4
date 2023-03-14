import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { appConfig } from 'src/utils/app-config';
import { ProductModel } from '../models/product.model';
import { ProductActionType, productsStore } from '../redux/product-state';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

    //get all products
    public async getAllProducts(): Promise<ProductModel[]> {
        //take products from global store- redux
    let products = productsStore.getState().products;
    
    if(products.length === 0){
      // get the observable
      const observable = this.http.get<ProductModel[]>(appConfig.productsUrl); 
      //convert to promise
      products = await firstValueFrom(observable);
       //save products to global store
       productsStore.dispatch({ type: ProductActionType.AllProducts, payload:products  })
    }
    return products;
    }

        //get all products
    public async getProductById(id:string): Promise<ProductModel> {
  
      // get the observable
      const observable = this.http.get<ProductModel>(appConfig.getProductByIdUrl + id); 
      //convert to promise
      const product = await firstValueFrom(observable);

    return product;
    }

    //delete product
    public async deleteProduct(id: string): Promise<void> {
      console.log("id:"+id);
      const observable = this.http.delete(appConfig.deleteProductUrl + id);
      await firstValueFrom(observable);
      //delete from global state
      productsStore.dispatch({ type: ProductActionType.DeleteProduct, payload: id })
    }

       //add product
      public async addProduct(product: ProductModel): Promise<void> {
        const observable = this.http.post<ProductModel>(appConfig.addProductUrl , product);
        await firstValueFrom(observable);
        //add product to global state
        productsStore.dispatch({ type: ProductActionType.AddProduct, payload: product })
      }

    //get all category
    public async getAllCategory(): Promise<CategoryModel[]> {

    // get the observable
    const observable = this.http.get<CategoryModel[]>(appConfig.getAllCategoryUrl); 
    //convert to promise
    const categories = await firstValueFrom(observable);

  return categories;
  }

          //get all products
          public async getProductsByCategory(name:string): Promise<ProductModel> {
  
            // get the observable
            const observable = this.http.get<ProductModel>(appConfig.productsByCategory + name); 
            //convert to promise
            const products = await firstValueFrom(observable);
      
          return products;
          }

}

