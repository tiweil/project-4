import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderModel } from 'src/app/models/order.model';
import { clientStore } from 'src/app/redux/login-state';
import { LoginService } from 'src/app/services/login.service';
import { OrderService } from 'src/app/services/order.service';
import { OrderCompleteComponent } from '../order-complete/order-complete.component';
import { MatDialog } from '@angular/material/dialog';
import { ItemModel } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

//בשביל חסימת תאריכים
export interface Times {
    date:string;
    times:number;
}

@Component({
  selector: 'app-order-process',
  templateUrl: './order-process.component.html',
  styleUrls: ['./order-process.component.css']
})
export class OrderProcessComponent implements OnInit{
  public cities: any[];
  public filteredCities: string[] = [];
  public myForm: FormGroup;
  public myCountry:string = "israel";
  public newOrder = new OrderModel();
  public isActive:boolean=false;
  public allOrders:OrderModel[];
  public items:ItemModel[];
  public sum:number=0;
  blockedDates: Date[];
  // public Times:object={

  // };

  constructor(private formBuilder: FormBuilder,
              private orderService: OrderService,
              private loginService: LoginService,
              private itemService:ItemService,
              public dialog: MatDialog ) {
    this.myForm = this.formBuilder.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      arrival_date:['',Validators.required],
      last_fourCC:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      // sum:['',Validators.required],
    });

    }

    public checkDates(orders:OrderModel[]){
      let temp:Date[];
      // let counter:number;

      // let allTimes:Times[];
      for(let i=0,counter=0;i<orders.length;i+=1){
        // let specTime:Times;
        // specTime.date=orders[i].order_date.slice(0,10);
        for(let j=1;j<=orders.length;j+=1){
          if(orders[i].order_date.slice(0,10)===orders[j].order_date.slice(0,10)){
            counter+=1;
          }
        }
        if(counter>=3){
          temp.push(new Date(orders[i].order_date.slice(0,10)))
        }
        // specTime.times=counter;
        // allTimes.push(specTime);
        counter=0;
      }
      // allTimes.map(item=>{
      //   if(item.times>=3){
      //     temp.push(item.date)
        // }
      // })
      return temp;
    }

    // isBlockedDate(selectedDate: string): boolean {
    //   const date = new Date(selectedDate);
    //   return this.blockedDates.some(bd =>
    //     this.datePipe.transform(date, 'yyyy-MM-dd') === this.datePipe.transform(bd, 'yyyy-MM-dd')
    //   );
  // }
  myHolidayFilter = (d: Date): boolean => {
    const time=d.getTime();
    return !this.blockedDates.find(x=>x.getTime()==time);
}
//   myHolidayFilter = (d: Date): boolean => {
//     const time=d.getTime();
//     return !this.blockedDates.find(x=>x.getTime()==time);
// }
  public async ngOnInit() {
    this.cities = await this.loginService.getCities(this.myCountry);
    this.allOrders=await this.orderService.getAllOrders();
    this.items = await this.itemService.itemsByCart(clientStore.getState().cart._id);
    this.sum=this.items.map(t => t.total_price).reduce((acc, value) => acc + value, 0);

    this.blockedDates=this.checkDates(this.allOrders);
    console.log(this.blockedDates)
  }

  // disabledDates = (date: Date): boolean => {
  //   // Convert the date to a string in the format yyyy-MM-dd
  //   const dateString = date.toISOString().slice(0, 10);

  //   // Check if the date should be disabled
  //   return this.blockedDates.includes(dateString);
  // }

  public async openDialog(){
    this.isActive=true;
    const dialogRef = this.dialog.open(OrderCompleteComponent);
    // await this.itemService.deleteAllItems(clientStore.getState().cart._id);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public filterCities(searchText: any): void {
    console.log(searchText);

    this.filteredCities = this.cities.filter(city => city.toLowerCase().includes(searchText.toLowerCase()));
    console.log(this.filteredCities);

  }

  public async send() {
    if (this.myForm.invalid) {
      // Mark all form controls as touched to trigger the display of validation errors
      Object.values(this.myForm.controls).forEach(control => {
        control.markAsTouched();
      });
      // Prevent the form from submitting
      return;
    }
  // If the form is valid, proceed with sending the data to the backend
  const formData = this.myForm.value;
  console.log(clientStore.getState().client._id,clientStore.getState().cart._id,this.sum,formData.city,formData.street,formData.arrival_date,new Date().toISOString(),formData.last_fourCC)
  this.newOrder = new OrderModel();
  this.newOrder.clientId = clientStore.getState().client ;
  this.newOrder.cartId = clientStore.getState().cart ;
  this.newOrder.sum = this.sum;
  this.newOrder.city = formData.city;
  this.newOrder.street = formData.street;
  this.newOrder.arrival_date = formData.arrival_date;
  this.newOrder.order_date = new Date().toISOString();
  this.newOrder.last_fourCC = formData.last_fourCC;
  console.log(this.newOrder);
      try{
        await this.orderService.addOrder(this.newOrder);
        console.log("order made successfully");
      }catch(err){
        console.log(err);
      }

  }
}
