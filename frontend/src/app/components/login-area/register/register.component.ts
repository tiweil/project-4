import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientModel } from 'src/models/client.model';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor( private loginService: LoginService, private router:Router ) {}
  
  public newClient = new ClientModel();

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
