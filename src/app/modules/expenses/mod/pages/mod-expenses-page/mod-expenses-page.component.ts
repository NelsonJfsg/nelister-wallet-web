import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExpensesPageComponent } from '../../../pages/expenses-page/expenses-page.component';
import { ModExpensesService } from '../../../services/mod-expenses.service';
import { EntitiesService } from '../../../../entities/services/entities.service';
import { FinancialEntity } from '../../../../entities/mod/interfaces/financial-entity.mode';
import { lastValueFrom } from 'rxjs';
import { Category } from '../../../../entities/interfaces/category.model';

@Component({
  selector: 'mod-expenses-page',
  templateUrl: './mod-expenses-page.component.html',
  styleUrl: './mod-expenses-page.component.css',
})
export class ModExpensesPageComponent implements OnInit {

  
  public financialEntities : FinancialEntity[] = [];
  public categories : Category[] = [];

  public expenseForm : FormGroup = {} as FormGroup;

  constructor(
    private dialogRef : MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private formBuilder : FormBuilder,
    private modExpensesService : ModExpensesService,
  ) { 

    console.log('data in modal', this.data);

    this.financialEntities = this.data.catalogues.financialEntities;
    this.categories = this.data.catalogues.categories;

    console.log('ModExpensesPageComponent', this.data.id);
    // if(data.id != undefined){ // * Is editing
    //   return;
    // }

    this.expenseForm = this.formBuilder.group({
      id : [null, []],
      title : ['', []],
      description : ['', []],
      expenseDate : [new Date(), []],
      categoryId : [null, []],
      financialEntityId : [null, []],
      amount : [null, []],
    });
  }

  ngOnInit(): void {
  }


  handleBack = () : void => {
    this.dialogRef.close(null);
  }
  
  handleCancel = (): void => {
    this.dialogRef.close(null);
  }

  handleSubmit = (): void => {
    this.modExpensesService.saveExpense(this.expenseForm.value).subscribe();
  }

}
