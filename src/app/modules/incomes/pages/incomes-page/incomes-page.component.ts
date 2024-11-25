import { Component } from '@angular/core';
import { Button } from '../../../../shared/components/navbar/interfaces/button.model';
import { MatDialog } from '@angular/material/dialog';
import { NewIncomePageComponent } from '../../mod/pages/new-income-page/new-income-page.component';
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
  selector: 'incomes-page',
  templateUrl: './incomes-page.component.html',
  styleUrl: './incomes-page.component.css',
})
export class IncomesPageComponent {
  
  public button : Button = {
    id : 1,
    iconName : 'add',
    title : 'Add Income',
    isActive : true,
    route : '/incomes/add'
  };

  displayedColumns: string[] = ['index', 'title', 'category', 'date', 'description', 'amount', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(
    private dialog : MatDialog,
  ) {

  }

  handleNewIncome() {
    let dialogRef = this.dialog.open(NewIncomePageComponent, {
      width: '90%',
      height: '80%',
    });
  }
    

}
