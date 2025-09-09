import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../env/.env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {

  private baseUrl : string = environment.apiAuthUrl;
  private headers : any = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + environment.authSecretKey
  }

  constructor(
    private httpClient : HttpClient
  ) { }

  public post<T>(endpoint : string, body : any) : Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/${endpoint}`, body, { headers : this.headers });
  }
  
  public get<T>(endpoint : string) : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${endpoint}`, { headers : this.headers });
  }

  public delete<T>(endpoint : string) : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${endpoint}`, { headers : this.headers });
  }
  


}
