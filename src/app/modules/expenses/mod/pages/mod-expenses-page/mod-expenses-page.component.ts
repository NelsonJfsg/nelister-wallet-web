import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExpensesPageComponent } from '../../../pages/expenses-page/expenses-page.component';
import { ModExpensesService } from '../../../services/mod-expenses.service';
import { EntitiesService } from '../../../../entities/services/entities.service';
import { FinancialEntity } from '../../../../entities/mod/interfaces/financial-entity.mode';
import { lastValueFrom } from 'rxjs';
import { Category } from '../../../../entities/interfaces/category.model';
import { SweetAlertService } from '../../../../../shared/services/sweet-alert.service';
import { FormsUtilsService } from '../../../../../shared/utils/forms-utils.service';

@Component({
  selector: 'mod-expenses-page',
  templateUrl: './mod-expenses-page.component.html',
  styleUrl: './mod-expenses-page.component.css',
})
export class ModExpensesPageComponent {

  // * Data
  public financialEntities : FinancialEntity[] = [];
  public categories : Category[] = [];

  // * Form
  public expenseForm : FormGroup = {} as FormGroup;

  // * Init
  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private sweetAlertService : SweetAlertService,
    private dialogRef : MatDialogRef<any>,
    private formBuilder : FormBuilder,
    private modExpensesService : ModExpensesService,
    private formsUtilsService : FormsUtilsService
  ) { 

    console.log('Data', data);
    this.financialEntities = this.data.catalogues.financialEntities;
    this.categories = this.data.catalogues.categories;

    if(data.expenseData?.id != undefined){ // * Is editing
      this.expenseForm = this.formBuilder.group({
        id : [data.expenseData.id, []],
        title : [data.expenseData.title, [Validators.required]],
        description : [data.expenseData.description, []],
        expenseDate : [new Date(data.expenseData.expenseDate), [Validators.required]],
        categoryId : [data.expenseData.categoryId.id, [Validators.required]],
        financialEntityId : [data.expenseData.financialEntityId.id, [Validators.required]],
        amount : [data.expenseData.amount, [Validators.required]],
      });
      
      return;
    }

    this.expenseForm = this.formBuilder.group({
      id : [null, []],
      title : ['', [Validators.required]],
      description : ['', []],
      expenseDate : [new Date(), [Validators.required]],
      categoryId : [null, [Validators.required]],
      financialEntityId : [null, [Validators.required]],
      amount : [null, [Validators.required]],
    });
  }

  public handleFormInputs (formControlName : string, index ?: number) {

    const inputElement = event?.target as HTMLInputElement;

    switch (formControlName) {

      case 'title':
        this.formsUtilsService.onlyAlphaNumericForm(this.expenseForm, inputElement, formControlName);
        break;
      case 'description':
        this.formsUtilsService.onlyAlphaNumericForm(this.expenseForm, inputElement, formControlName);
        break;
      case 'amount':
        this.formsUtilsService.moneyFormatForm(this.expenseForm, inputElement, formControlName);
        break;
    }
  }

  handleBack = () : void => {
    this.dialogRef.close(null);
  }
  
  handleCancel = (): void => {
    this.dialogRef.close(null);
  }

  handleSubmit = (): void => {

    if(this.expenseForm.invalid){
      this.sweetAlertService.showErrorAlert('Error','Por favor, rellena los campos obligatorios');
      return;
    }

    this.modExpensesService.saveExpense(this.expenseForm.value).subscribe(res => {
      let status : boolean = res != null;

      if(status){
          this.sweetAlertService.showSuccessAlert('Guardado con exito','Gasto registrado correctamente');
      }

      this.dialogRef.close(status);
    });
  }

}
