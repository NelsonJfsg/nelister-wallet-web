import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  public showSuccessAlert(title : string, description : string) : void{
    Swal.fire({
      icon: 'success',
      title: title,
      text: description,
    });
  }

  public showErrorAlert(title : string, description : string) : void{
    Swal.fire({
      icon: 'error',
      title: title,
      text: description,
    });
  }

  public async showWarningAlert(title : string, description : string) : Promise<any>{
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: description,
      showCancelButton: true,
      confirmButtonText: 'Okay',
      cancelButtonText: 'Cancel'
    });
  }

}
