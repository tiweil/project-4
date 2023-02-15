import { Injectable } from '@angular/core';
//http
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { appConfig } from 'src/utils/app-config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //httpהקונסטרקוטר מייצר אוביקט חדש מסוג  
  constructor(private http: HttpClient) { }

    public async getAllProducts(): Promise<ProductModel[]> {
      // get the observable
    const observable = this.http.get<ProductModel[]>(appConfig.productsUrl); 
      //convert to promise
    const products = await firstValueFrom(observable);
    
    return products;
    }
}

