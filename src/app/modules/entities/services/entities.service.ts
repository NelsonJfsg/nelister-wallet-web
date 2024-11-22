import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const route = {
  financial : 'financial',

}
@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  constructor(
    private http: HttpClient
  ) { }

  saveFinancialEntity(data : any) {
    return this.http.post(`${route.financial}/add-financial-entity`, data);
  }
  getFinancial() {
    return this.http.get(`${route.financial}/get-all-financial-entities`);
  }

}
