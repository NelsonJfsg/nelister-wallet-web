import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesPageComponent } from './pages/entities-page/entities-page.component';


@NgModule({
  declarations: [
    EntitiesPageComponent
  ],
  imports: [
    CommonModule,
    EntitiesRoutingModule
  ],
  exports: [
    EntitiesPageComponent
  ]
})
export class EntitiesModule { }
