import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Button } from '../../../../shared/components/navbar/interfaces/button.model';
import { Entity } from '../../interfaces/entity.mode';
import { ModEntityPageComponent } from '../../mod/pages/mod-entity-page/mod-entity-page.component';

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
export class EntitiesPageComponent { 
  public button : Button = {
    id : 1,
    iconName : 'add',
    title : 'Add Income',
    isActive : true,
    route : '/incomes/add'
  };

  displayedColumns: string[] = ['index', 'title', 'description', 'entity', 'type', 'dueDate', 'statementDate', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(
    private dialog : MatDialog,
  ) {

  }

  handleNewEntity() {
    let dialogRef = this.dialog.open(ModEntityPageComponent, {
      width: '90%',
      height: '80%',
    });
  }
}
