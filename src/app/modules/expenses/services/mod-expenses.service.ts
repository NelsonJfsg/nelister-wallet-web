import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense.model';
import { Expenses } from '../interfaces/expenses-table.model';
import { HttpService } from '../../../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ModExpensesService {

  constructor(
    private httpApiService : HttpService
  ) { }

  public saveExpense (expense : Expense) {
    return this.httpApiService.post<Expense>('expenses', expense);
  }

  public getExpenses () {
    return this.httpApiService.get<Expenses[]>('expenses');
  }


}
