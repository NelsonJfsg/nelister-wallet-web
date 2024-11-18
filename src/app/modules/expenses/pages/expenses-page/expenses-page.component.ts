import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../../../../shared/components/navbar/interfaces/button.model';

export interface Income {
  title : string;
  category : string;
  date : string;
  description : string;
  amount : string;
}

const ELEMENT_DATA: Income[] = [
  {
    title : 'Salary',
    category : 'Salary',
    date : '2021-10-10',
    description : 'Monthly Salary',
    amount : '1000'

  },
  {
    title : 'Salary',
    category : 'Salary',
    date : '2021-10-10',
    description : 'Monthly Salary',
    amount : '1000'

  },

];
@Component({
  selector: 'expenses-page',
  templateUrl: './expenses-page.component.html',
  styleUrl: './expenses-page.component.css',
})
export class ExpensesPageComponent { 
  displayedColumns: string[] = ['index', 'title', 'category', 'date', 'description', 'amount', 'actions'];
  dataSource = ELEMENT_DATA;
  public button : Button = {
    id : 1,
    iconName : 'add',
    title : 'Add Income',
    isActive : true,
    route : '/incomes/add'
  };

  handleNewEntity() : void {

  }

}
