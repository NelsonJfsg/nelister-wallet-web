import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Button } from '../../../../shared/components/navbar/interfaces/button.model';
import { Entity } from '../../interfaces/entity.mode';
import { ModEntityPageComponent } from '../../mod/pages/mod-entity-page/mod-entity-page.component';
import { EntitiesService } from '../../services/entities.service';
import { lastValueFrom } from 'rxjs';

const ELEMENT_DATA: Entity[] = [
  {
    id : 1,
    title : 'Salary',
    description : 'Payment from company',
    entity : 1,
    type : 1,
    dueDate : new Date(),
    statementDate : new Date(),
  },
  {
    id : 1,
    title : 'Salary',
    description : 'Payment from company',
    entity : 1,
    type : 1,
    dueDate : new Date(),
    statementDate : new Date(),
  },
];
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
  dataSource : any = ELEMENT_DATA;

  constructor(
    private dialog : MatDialog,
    private entitiesService : EntitiesService
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.dataSource = await lastValueFrom(this.entitiesService.getFinancial());
  }

  
  handleNewEntity() {
    let dialogRef = this.dialog.open(ModEntityPageComponent, {
      width: '90%',
      height: '80%',
    });
  }
}
