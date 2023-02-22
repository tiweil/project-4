import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom} from 'rxjs';
import { appConfig } from 'src/utils/app-config';
import { ClientModel } from 'src/app/models/client.model';

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
  const isClient = await firstValueFrom(observable);

  return isClient;
  }

  //register
  public async register(newClient: ClientModel): Promise<ClientModel> {
    //const formData = { ...newClient };
    //delete formData.confirmPassword;
    console.log(newClient);
    const observable = this.http.post<ClientModel>(appConfig.registerUrl, newClient);

    const addClient = await firstValueFrom(observable);

    return addClient;
  }

  //list cities
  public async getCities(country: string): Promise<any> {
    const object = {"country":country};
    
    try{
    const url = 'https://countriesnow.space/api/v0.1/countries/cities';
    const observable = this.http.post<any>(url,object);
    const cities = await firstValueFrom(observable);
    return cities.data;
    }catch(err:any){
      console.log(err);
    }
  }

}

