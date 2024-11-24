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
import { ModExpensesPageComponent } from './mod/pages/mod-expenses-page/mod-expenses-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';


@NgModule({
  declarations: [
    ExpensesPageComponent,
    ModExpensesPageComponent
  ],
  imports: [

    // * Angular
    CommonModule,
    ExpensesRoutingModule,

    // * Material angular
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    // * Shared
    SharedModule,

    // * Forms
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    ExpensesPageComponent,
    ModExpensesPageComponent
  ],
  providers: [
    provideNativeDateAdapter()
  ],
})
export class ExpensesModule { }
