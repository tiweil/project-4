import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom} from 'rxjs';
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
  const isClient = await firstValueFrom(observable);

  return isClient;
  }

  //register
  public async register(newClient: ClientModel): Promise<ClientModel> {

    const observable = this.http.post<ClientModel>(appConfig.registerUrl, newClient);

    const addClient = await firstValueFrom(observable);

    return addClient;
  }

  //list cities
  public async getCities(country: string): Promise<any> {
    const object = {"country":country};
    console.log(object);
    try{
    const url = 'https://countriesnow.space/api/v0.1/countries/cities';
    const o = this.http.post<any>(url,object);
    const cities = await firstValueFrom(o);
    console.log(cities.data);
    return cities.data;
    }catch(err:any){
      console.log(err);
    }
  }

}

