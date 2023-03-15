export class OrderModel {
  _id?: string;
  clientId?: string;
  cartId?: string;
  sum: number;
  city: string;
  street: string;
  arrival_date: Date;
  order_date?: string;
  last_fourCC: number;
}
