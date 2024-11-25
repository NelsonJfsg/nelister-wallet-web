import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense.model';
import { Expenses } from '../interfaces/expenses-table.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModExpensesService {
  
  constructor(
    private http : HttpClient
  ) { }

  public saveExpense (expense : Expense) {
    return this.http.post<Expense>('expenses', expense);
  }

  public getExpenses () {
    return this.http.get<Expenses[]>('expenses');
  }

  public deleteExpense(id: number) : Observable<boolean> {
    return this.http.delete<boolean>(`expenses`, {body : {id}});
  }

  public updateExpense(expense : Expense) {
    return this.http.put<Expense>('expenses', expense);
  }



}
