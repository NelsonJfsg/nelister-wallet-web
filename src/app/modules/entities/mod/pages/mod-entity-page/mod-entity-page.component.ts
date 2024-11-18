import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewIncomePageComponent } from '../../../../incomes/mod/pages/new-income-page/new-income-page.component';

@Component({
  selector: 'mod-entity-page',
  templateUrl: './mod-entity-page.component.html',
  styleUrl: './mod-entity-page.component.css',
})
export class ModEntityPageComponent { 

  public entityForm : FormGroup = {} as FormGroup;
  public entityOptions : any[] = [
    {
      id : 1,
      title : 'tarjeta'
    },
    {
      id : 2,
      title : 'banco'
    },
    {
      id : 3,
      title : 'persona'
    },
  ];
  constructor(
    private dialogRef : MatDialogRef<NewIncomePageComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
    private formBuilder : FormBuilder,
  ){
    
    this.entityForm = this.formBuilder.group({
      title : ['', []],
      description : ['', []],
      entity : ['', []],
      type : ['', []],
      statementDate : ['', []],
      dueDate : ['', []],
    });



  }

  handleBackAction() {
    this.dialogRef.close();
  }

  handleSubmit() {
    console.log('this.incomeForm.value', this.entityForm.value);;
  }
}
