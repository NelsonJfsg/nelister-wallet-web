import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Button } from '../../../../shared/components/navbar/interfaces/button.model';
import { MatDialog } from '@angular/material/dialog';
import { ModExpensesPageComponent } from '../../mod/pages/mod-expenses-page/mod-expenses-page.component';
import { FinancialEntity } from '../../../entities/mod/interfaces/financial-entity.mode';
import { EntitiesService } from '../../../entities/services/entities.service';
import { lastValueFrom } from 'rxjs';
import { CategoriesService } from '../../../../shared/services/categories.service';
import { Category } from '../../../entities/interfaces/category.model';
import { ModExpensesService } from '../../services/mod-expenses.service';
import { Expenses } from '../../interfaces/expenses-table.model';
import { totalSum } from '../../../../shared/utils/functions/totalSum';
import { Expense } from '../../interfaces/expense.model';


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
export class ExpensesPageComponent implements OnInit{
  
  total : number = 0;


  // * Catalogues
  public financialEntities : FinancialEntity[] = [];
  public categories : Category[] = [];


  displayedColumns : string[] = [
    'index', 
    'title', 
    'category',
    'financialEntity', 
    'date', 
    'description', 
    'amount', 
    'actions'
  ];


  dataSource : Expenses[] = [];
  
  constructor(
    private dialog : MatDialog,
    private financialEntitiesService : EntitiesService,
    private categoriesService : CategoriesService,
    private modExpensesService : ModExpensesService,
  ){}

  public async ngOnInit() : Promise<void> {

    this.financialEntitiesService.financialEntities$.subscribe(async entities => {
      this.financialEntities = await entities;
    });

    this.categoriesService.categories$.subscribe(categories => {
      this.categories = categories;
    });

    this.modExpensesService.getExpenses().subscribe(expenses => {
      this.total = this.totalSum(expenses);
      this.dataSource = expenses;
      
    });

  }
  totalSum(expenses: Expenses[]) : number {
    return totalSum(expenses.map(expense => parseFloat(expense.amount)));
  }


  public button : Button = {
    id : 1,
    iconName : 'add',
    title : 'Add Income',
    isActive : true,
    route : '/incomes/add'
  };

  handleNewExpense = () : void => {
    let dialogRef = this.dialog.open(ModExpensesPageComponent, {
      width: '90%',
      height: '80%',
      data : {
        expenseData : null,
        catalogues : {
          financialEntities : this.financialEntities,
          categories : this.categories
        }

      }
    });

    dialogRef.afterClosed().subscribe((isSaved : boolean) => {
      if(isSaved){
        this.modExpensesService.getExpenses().subscribe(expenses => {
          this.dataSource = expenses;
        });
      }else{
        console.log('No se guardo');
      }
    });
  } 

  // * Cruds
  public onHandleDelete(id : number) {
    this.modExpensesService.deleteExpense(id).subscribe((res : boolean) => {
      if(res){
        this.modExpensesService.getExpenses().subscribe(expenses => {
          this.dataSource = expenses;
        });
      }
    });
  }

  
  
  public onHandleUpdate(expense : Expense) {
    let dialogRef = this.dialog.open(ModExpensesPageComponent, {
      width: '90%',
      height: '80%',
      data : {
        expenseData : expense,
        catalogues : {
          financialEntities : this.financialEntities,
          categories : this.categories
        }
      }
    });

    dialogRef.afterClosed().subscribe((isSaved : boolean) => {
      if(isSaved){
        this.modExpensesService.getExpenses().subscribe(expenses => {
          this.dataSource = expenses;
        });
      }else{
        console.log('No se guardo');
      }
    });
  }

}
