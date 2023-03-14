import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private formBuilder: FormBuilder,private loginService: LoginService ) {
    this.myForm = this.formBuilder.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      date:['',Validators.required],
      credit:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]]
    });
    }
  public async ngOnInit() {
    this.cities = await this.loginService.getCities(this.myCountry);
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
      console.log("order made successfully")
      // Prevent the form from submitting
      return;
    }
    console.log("order made successfully")

    // If the form is valid, proceed with sending the data to the backend
    const formData = this.myForm.value;
    // this.newClient = new ClientModel();
    // this.newClient.first_name = formData.first_name;
    // this.newClient.last_name = formData.last_name;
    // this.newClient.email = formData.email;
    // this.newClient.id_num = formData.id_num;
    // this.newClient.password = formData.password;
    // this.newClient.city = formData.city;
    // this.newClient.street = formData.street;
    // console.log(this.newClient);
    // try{
    //   await this.loginService.register(this.newClient);
    //   alert(`welcome ${this.newClient.first_name}!`);
    //   this.router.navigateByUrl("/products");
    // }
    // catch(err:any){
    //   console.log(err);
    //   alert(err);
    // }
  }
}
