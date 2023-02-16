import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { appConfig } from 'src/utils/app-config';
import { ClientModel } from 'src/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //login client
  public async login(myClient: ClientModel): Promise<ClientModel> {
    // get the observable
  const observable = this.http.post<ClientModel>(appConfig.loginUrl, myClient); 
    //convert to promise
  const client = await firstValueFrom(observable);
  
  return client;
  }
}

