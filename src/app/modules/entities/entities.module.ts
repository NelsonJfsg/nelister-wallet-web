import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import { EntitiesPageComponent } from './pages/entities-page/entities-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../shared/shared.module';
import { ModEntityPageComponent } from './mod/pages/mod-entity-page/mod-entity-page.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    EntitiesPageComponent,
    ModEntityPageComponent
  ],
  imports: [
    CommonModule,
    EntitiesRoutingModule,
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
    MatSelectModule
  ],
  exports: [
    EntitiesPageComponent,
    ModEntityPageComponent
  ],
  providers: [
    provideNativeDateAdapter()
  ],
})
export class EntitiesModule { }
