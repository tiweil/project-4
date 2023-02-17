import { LoginService } from 'src/services/login.service';
import { Component } from '@angular/core';
import { ClientModel } from 'src/models/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public existsClient = new ClientModel();

  public clientName : string="hi";

  constructor(private loginService: LoginService,  private router: Router ) {}

  public async send() {
    try {
      const isClient = await this.loginService.login(this.existsClient);
      console.log(isClient);
      switch(isClient.role){
        case 0:
          alert("Did you signed before?/ or one of your failed wrong ");
          break;

        case 1:
          alert(`welcome admin ${isClient.first_name}`);
          this.router.navigateByUrl("/products/new");
          break;

        case 2:
          alert(`welcome back ${isClient.first_name}! enjoy shopping`);
            this.router.navigateByUrl("/products");
          break;
      }
    } catch (err:any) {
      alert(err.message);
    }
  }

}
