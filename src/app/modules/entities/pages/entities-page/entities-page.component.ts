import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Button } from '../../../../shared/components/navbar/interfaces/button.model';
import { Entity } from '../../interfaces/entity.mode';
import { ModEntityPageComponent } from '../../mod/pages/mod-entity-page/mod-entity-page.component';
import { EntitiesService } from '../../services/entities.service';
import { lastValueFrom } from 'rxjs';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';
import { FinancialEntity } from '../../mod/interfaces/financial-entity.mode';

@Component({
  selector: 'entities-page',
  templateUrl: './entities-page.component.html',
  styleUrl: './entities-page.component.css',
})
export class EntitiesPageComponent implements OnInit {
     
  public button : Button = {
    id : 1,
    iconName : 'add',
    title : 'Add Income',
    isActive : true,
    route : '/incomes/add'
  };

  displayedColumns: string[] = ['index', 'title', 'description', 'entity', 'type', 'dueDate', 'statementDate', 'actions'];
  dataSource : FinancialEntity[] = [];

  constructor(
    private dialog : MatDialog,
    private entitiesService : EntitiesService,
    private sweetAlertService : SweetAlertService
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.dataSource = await lastValueFrom(this.entitiesService.getFinancial());
    console.log('EntitiesPageComponent', this.dataSource);
  }

  
  handleNewEntity() {
    let dialogRef = this.dialog.open(ModEntityPageComponent, {
      width: '90%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe((result : boolean) => {

      if(result == null){
        return;
      }

      if(result){
        this.sweetAlertService.showSuccessAlert('Entidad guardada', 'Entidad financiera guardada con éxito');
        this.ngOnInit();
      }else{
        this.sweetAlertService.showErrorAlert('Error', 'Hubo un error al guardar la entidad financiera');
      }
    });
  }

  onHandleUpdate(financialEntity : FinancialEntity) {
    let dialogRef = this.dialog.open(ModEntityPageComponent, {
      width: '90%',
      height: '80%',
      data : financialEntity
    });

    dialogRef.afterClosed().subscribe((result : boolean) => {

      if(result == null){
        return;
      }

      if(result){
        this.sweetAlertService.showSuccessAlert('Entidad guardada', 'Entidad financiera guardada con éxito');
        this.ngOnInit();
      }else{
        this.sweetAlertService.showErrorAlert('Error', 'Hubo un error al guardar la entidad financiera');
      }
    });
  }
  
  async onHandleDelete(financialEntityId : number) {

    this.sweetAlertService.showWarningAlert('Eliminar entidad financiera', '¿Estás seguro de que deseas eliminar esta entidad financiera?')
    .then((result) => {
      if(result.isConfirmed){
        this.entitiesService.dropFinancialEntity(financialEntityId).subscribe((result : boolean) => {
          this.ngOnInit();
        });
      }
    });

  }
}
