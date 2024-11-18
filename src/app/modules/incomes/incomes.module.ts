import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomesRoutingModule } from './incomes-routing.module';
import { IncomesPageComponent } from './pages/incomes-page/incomes-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { NewIncomePageComponent } from './mod/pages/new-income-page/new-income-page.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
@NgModule({
  declarations: [
    IncomesPageComponent,
    NewIncomePageComponent,
  ],
  imports: [
    CommonModule,
    IncomesRoutingModule,
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
  exports : [
    IncomesPageComponent,
    NewIncomePageComponent
  ],
  providers : [
    provideNativeDateAdapter()
  ]
})
export class IncomesModule { }
