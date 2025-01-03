import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';


@NgModule({
  declarations: [
    ReportsPageComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  exports: [
    ReportsPageComponent
  ]
})
export class ReportsModule { }
