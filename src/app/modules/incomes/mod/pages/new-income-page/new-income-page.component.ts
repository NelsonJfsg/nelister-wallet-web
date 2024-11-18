import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'mod-new-income-page',
  templateUrl: './new-income-page.component.html',
  styleUrl: './new-income-page.component.css',
})
export class NewIncomePageComponent {

  public incomeForm : FormGroup = {} as FormGroup;
  
  constructor(
    private dialogRef : MatDialogRef<NewIncomePageComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
    private formBuilder : FormBuilder,
  ){
    
    this.incomeForm = this.formBuilder.group({
      title : ['', []],
      category : [null, []],
      date : [null, []],
      description : ['', []],
      amount : [null, []],
    });

  }

  handleBackAction() {
    this.dialogRef.close();
  }

  handleSubmit() {
    console.log('this.incomeForm.value', this.incomeForm.value);;
  }
    
}
