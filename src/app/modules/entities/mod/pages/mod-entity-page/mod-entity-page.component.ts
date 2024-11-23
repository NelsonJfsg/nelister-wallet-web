import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewIncomePageComponent } from '../../../../incomes/mod/pages/new-income-page/new-income-page.component';
import { EntitiesService } from '../../../services/entities.service';
import { FinancialType } from '../../interfaces/financial-type.model';
import { FinancialEntity } from '../../interfaces/financial-entity.mode';

@Component({
  selector: 'mod-entity-page',
  templateUrl: './mod-entity-page.component.html',
  styleUrl: './mod-entity-page.component.css',
})
export class ModEntityPageComponent implements OnInit{


  public entityForm : FormGroup = {} as FormGroup;
  public entityOptions : FinancialType[] = [];
  
  constructor(
    private dialogRef : MatDialogRef<NewIncomePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data : FinancialEntity,
    private formBuilder : FormBuilder,
    private entitiesService : EntitiesService
  ){
    console.log('ModEntityPageComponent', this.data);
    if(this.data != null){
      this.entityForm = this.formBuilder.group({
        id : [this.data.id, []],
        title : [this.data.title, []],
        description : [this.data.description, []],
        financialType : [this.data.financialType?.id, []],
        type : [this.data.type, []],
        statementDate : [this.data.statementDate, []],
        dueDate : [this.data.dueDate, []],
      });
    }else{
      this.entityForm = this.formBuilder.group({
        id : [null, []],
        title : ['', []],
        description : ['', []],
        financialType : [null, []],
        type : [null, []],
        statementDate : [null, []],
        dueDate : [null, []],
      });
    }



  }

  ngOnInit(): void {
    this.entitiesService.getFinancialTypes().subscribe((financialTypes : FinancialType[]) => {
      this.entityOptions = financialTypes;
    });
  }

  handleBackAction() {
    this.dialogRef.close(null);
  }

  handleSubmit() {
    if(this.entityForm.value.id == null){
      this.entitiesService.saveFinancialEntity(this.entityForm.value).subscribe((financialEntity : FinancialEntity) => {
        if(financialEntity.id != 0){
          this.dialogRef.close(true);
        }else{
          this.dialogRef.close(false);
        }
      });
    }else{
      this.entitiesService.updateFinancialEntity(this.entityForm.value).subscribe((financialEntity : FinancialEntity) => {
        if(financialEntity.id != 0){
          this.dialogRef.close(true);
        }else{
          this.dialogRef.close(false);
        }
      });
    }
  }

  // * HTML Events
  onHandleDiferentFinancialType() {
    this.entityForm.patchValue({
      type : null,
      statementDate : null,
      dueDate : null,
    });
  } 
  
  onHandleDiferentCardType() {
    this.entityForm.patchValue({
      statementDate : null,
      dueDate : null,
    });
  }

}
