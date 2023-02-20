import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { appConfig } from 'src/utils/app-config';
import { ProductModel } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

    public async getAllProducts(): Promise<ProductModel[]> {
      // get the observable
    const observable = this.http.get<ProductModel[]>(appConfig.productsUrl); 
      //convert to promise
    const products = await firstValueFrom(observable);
    
    return products;
    }
}

