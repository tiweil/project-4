import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientModel } from 'src/models/client.model';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public newClient = new ClientModel();
  public myCountry:string = "israel";
  public cities: any[];
  selectedCity: string;

  constructor( private loginService: LoginService, private router:Router ) {}

  public async ngOnInit() {
     this.cities = await this.loginService.getCities(this.myCountry);
    // await this.loginService.getCities(this.myCountry).then((data: any) => {
    // this.cities = data;
  //});
    console.log("cities:"+ this.cities);
  }

  public async send(){
    try {
      console.log(this.newClient);
      await this.loginService.register(this.newClient);
      alert("welcome!");
      this.router.navigateByUrl("/products");
    } 
    catch (err:any) {
      console.log(err);
    }
  }

}
