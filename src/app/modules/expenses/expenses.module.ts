import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesPageComponent } from './pages/expenses-page/expenses-page.component';


@NgModule({
  declarations: [
      ExpensesPageComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ],
  exports: [
    ExpensesPageComponent
  ]
})
export class ExpensesModule { }
