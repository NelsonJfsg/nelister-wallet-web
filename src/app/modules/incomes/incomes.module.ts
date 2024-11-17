import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomesRoutingModule } from './incomes-routing.module';
import { IncomesPageComponent } from './pages/incomes-page/incomes-page.component';


@NgModule({
  declarations: [
    IncomesPageComponent
  ],
  imports: [
    CommonModule,
    IncomesRoutingModule
  ],
  exports : [
    IncomesPageComponent
  ]
})
export class IncomesModule { }
