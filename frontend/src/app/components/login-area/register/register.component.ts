import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/client.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public myForm = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    id_num: new FormControl(0, [Validators.required, Validators.minLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  public newClient = new ClientModel();
  public myCountry:string = "israel";
  public cities: any[];
  selectedCity: string;

  constructor( private loginService: LoginService, private router:Router ) {}

  public async ngOnInit() {
    this.cities = await this.loginService.getCities(this.myCountry);
  }

  public async send(){
    this.newClient.first_name = this.myForm.get('first_name').value;
    this.newClient.last_name = this.myForm.get('last_name').value;
    this.newClient.email = this.myForm.get('email').value;
    this.newClient.id_num = this.myForm.get('id_num').value;
    this.newClient.password=this.myForm.get('password').value;
    this.newClient.city = this.myForm.get('city').value;
    this.newClient.street = this.myForm.get('street').value;
    console.log(this.newClient);
    try {
      await this.loginService.register(this.newClient);
      alert("welcome!");
      this.router.navigateByUrl("/products");
    } 
    catch (err:any) {
      console.log(err);
    }
  }

}
