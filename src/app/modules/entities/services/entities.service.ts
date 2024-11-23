import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialType } from '../mod/interfaces/financial-type.model';
import { FinancialEntity } from '../mod/interfaces/financial-entity.mode';

const route = {
  financial : 'financial',
  financialType : 'financial-type',
}
@Injectable({
  providedIn: 'root'
})
export class EntitiesService {
  
  constructor(
    private http: HttpClient
  ) { }

  saveFinancialEntity (data : any) : Observable<FinancialEntity> {
    return this.http.post<FinancialEntity>(`${route.financial}/add-financial-entity`, data);
  }
  
  updateFinancialEntity(value: any) : Observable<FinancialEntity> {
    return this.http.post<FinancialEntity>(`${route.financial}/update-financial-entity`, value);
  }
  
  getFinancial() : Observable<FinancialEntity[]> {
    return this.http.get<FinancialEntity[]>(`${route.financial}/get-all-financial-entities`);
  }

  getFinancialTypes() : Observable<FinancialType[]> {
    return this.http.get<FinancialType[]>(`${route.financialType}/get-all`);
  }

  dropFinancialEntity(financialEntityId: number) : Observable<any> {
    return this.http.delete(`${route.financial}/delete-financial-entity?id=${financialEntityId}`);
  }




}
