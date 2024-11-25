import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsUtilsService {

  constructor() { }

  public refreshFormControlValidation(formGroup : FormGroup, formControlName : string) {
    formGroup.controls[formControlName].updateValueAndValidity();
  }

  // * General
  public calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDifference = today.getMonth() - dateOfBirth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())) {
      age--;
    }
    return age;
  }

  // * Patterns
  private onlyAlphaNumeric(text : string) {
    return text.replace(/[^a-zA-Z0-9]/g, '');
  }

  private onlyNumeric(text : string) {
    return text.replace(/[^0-9]/g, '');
  }

  private onlyAlphaWithAccents(text: string): string {
    return text.replace(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]/g, '');
  }

  private numericWithHyphen(text : string) {
    return text.replace(/[^0-9-]/g, '');
  }
  
  private onlyAlphaNumericWithHyphen(text : string) {
    return text.replace(/[^a-zA-Z0-9-]/g, '');
  }

  private SoloAlfanumericos(value: string): string {
    return value.replace(/[^a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ ]/g, ''); //PERMITE LETRAS CON DIERESIS Y ACENTOS, ESPACIOS Y NUMEROS
  }

  // * Forms validations
  public onlyAlphaForm(formGroup : FormGroup, inputElement: HTMLInputElement, controlName : string) : void {
    const filteredValue = this.onlyAlphaWithAccents(inputElement.value);
    inputElement.value = filteredValue;
    formGroup.get(controlName)?.setValue(filteredValue);
    this.refreshFormControlValidation(formGroup, controlName);
  }

  public onlyAlphaNumericForm(formGroup : FormGroup, inputElement: HTMLInputElement, controlName: string): void {
    const filteredValue = this.SoloAlfanumericos(inputElement.value);
    inputElement.value = filteredValue;
    formGroup.get(controlName)?.setValue(filteredValue);
    this.refreshFormControlValidation(formGroup, controlName);
  }

  public onlyNumericForm(formGroup : FormGroup, inputElement: HTMLInputElement, controlName: string): void {
    const filteredValue = this.onlyNumeric(inputElement.value);
    inputElement.value = filteredValue;
    formGroup.get(controlName)?.setValue(filteredValue);
    this.refreshFormControlValidation(formGroup, controlName);
  }

  public onlyAlphaNumericWithHyphenForm(formGroup : FormGroup, inputElement: HTMLInputElement, option: string) {
    const filteredValue = this.onlyAlphaNumericWithHyphen(inputElement.value);
    inputElement.value = filteredValue;
    formGroup.get(option)?.setValue(filteredValue);
    this.refreshFormControlValidation(formGroup, option);
  }

  public disabledCopyPaste(formGroup : FormGroup, inputElement: HTMLInputElement, controlName: string) {
    inputElement.addEventListener('paste', (event: ClipboardEvent) => {
      event.preventDefault();
      const text = event.clipboardData?.getData('text/plain');
      document.execCommand('insertText', false, text);
      this.refreshFormControlValidation(formGroup, controlName);
    });
  }
  
  public disableValidators(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(controlName => {
      const control = formGroup.get(controlName);
      if (control) {
        control.clearValidators();
        control.updateValueAndValidity();
      }
    });
  }
  
  public moneyFormatForm(formGroup : FormGroup, inputElement: HTMLInputElement, formControlName : string): void {
    let value = inputElement.value.replace(/[^0-9]/g, ''); // Limpiar la entrada

    if (value.length > 2) {
      value = value.slice(0, -2) + '.' + value.slice(-2);
    } else if (value.length === 2) {
      value = '0.' + value;
    } else if (value.length === 1) {
      value = '0.0' + value;
    } else {
      value = '0.00'; // Caso para cuando no hay dígitos
    }

    // Eliminar ceros a la izquierda innecesarios
    value = value.replace(/^0+(?!\.|$)/, '');

    inputElement.value = value;
    formGroup.get(formControlName)?.setValue(value);
  }

  public touchAllControls(formGroup: FormGroup) : void {
    Object.keys(formGroup.controls).forEach(controlName => {
      const control = formGroup.controls[controlName];
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.touchAllControls(control);
      }
    });
  }
}
