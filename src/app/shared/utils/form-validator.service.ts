import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  // Only for debug purposes
  public validateControlsInForm(form : FormGroup) : void {
    console.log("form : ", form);
    let rest = Object.keys(form.controls).filter(controlName => {
      
      const control = form.controls[controlName];

      if(!control.valid){
        console.log("control name : ", controlName);
        console.log("control is valid : ", control.valid);
        return control;
      }
      
      control.markAsTouched();
      control.updateValueAndValidity();
    });
    
    console.log("rest : ", rest);
    console.log("rest length : ", rest.length);
    
    if(rest.length == 0){
      console.info("Controls are valid ");
    }
  }
  
}
