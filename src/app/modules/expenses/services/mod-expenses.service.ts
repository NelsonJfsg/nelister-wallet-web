import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense.model';
import { Expenses } from '../interfaces/expenses-table.model';

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


}
