import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesPageComponent } from './pages/expenses-page/expenses-page.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
      ExpensesPageComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatIconModule,
  ],
  exports: [
    ExpensesPageComponent
  ]
})
export class ExpensesModule { }
