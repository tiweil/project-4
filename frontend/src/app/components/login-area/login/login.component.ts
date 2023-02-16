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

  constructor(private loginService: LoginService,  private router: Router ) {}

  public async send() {
    try {
      console.log(this.existsClient);
      const log = await this.loginService.login(this.existsClient);
      if(log.email==this.existsClient.email && log.password==this.existsClient.password){
      alert("welcome and enjoy shopping");
    this.router.navigateByUrl("/layout");
      }else{
        alert("maybe you need to register or one of t*//*-he failed wrong ")
      }
    } catch (err:any) {
      alert(err.message);
    }
  }
}
