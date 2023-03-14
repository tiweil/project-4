import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { appConfig } from 'src/utils/app-config';
import { OrderModel } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  //add order
  public async addOrder(order: OrderModel): Promise<void> {
  const observable = this.http.post<OrderModel>(appConfig.AddOrderUrl , order);
  await firstValueFrom(observable);
  }
}
