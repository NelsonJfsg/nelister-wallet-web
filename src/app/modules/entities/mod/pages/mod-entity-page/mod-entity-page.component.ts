import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewIncomePageComponent } from '../../../../incomes/mod/pages/new-income-page/new-income-page.component';
import { EntitiesService } from '../../../services/entities.service';

@Component({
  selector: 'mod-entity-page',
  templateUrl: './mod-entity-page.component.html',
  styleUrl: './mod-entity-page.component.css',
})
export class ModEntityPageComponent implements OnInit{ 

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
    private entitiesService : EntitiesService
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

  ngOnInit(): void {
   
  }

  handleBackAction() {
    this.dialogRef.close();
  }

  handleSubmit() {
    this.entitiesService.saveFinancialEntity(this.entityForm.value).subscribe(res => {
      console.log('res', res);
    });
  }
}
