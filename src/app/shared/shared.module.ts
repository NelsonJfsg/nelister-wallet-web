import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/pages/navbar/navbar.component';
import { ButtonComponent } from './components/navbar/components/button/button.component';
import { ProfileComponent } from './components/navbar/components/profile/profile.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SweetAlertService } from './services/sweet-alert.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ModHeaderComponent } from './components/mod-header/mod-header.component';
import { ModalLayoutComponent } from './layouts/modal-layout/modal-layout.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableLayoutComponent } from './layouts/table-layout/table-layout.component';


@NgModule({
  declarations: [
    
    // * Layouts
    MainLayoutComponent,
    AuthLayoutComponent,
    ModalLayoutComponent,
    TableLayoutComponent,
    
    // * Components
    NavbarComponent,
    ButtonComponent,
    ProfileComponent,
    SharedButtonComponent,
    ModHeaderComponent,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

    // * Material
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,

  ],
  exports : [

    // * Layouts
    MainLayoutComponent,
    AuthLayoutComponent,
    ModalLayoutComponent,

    // * Components
    NavbarComponent,
    ButtonComponent,
    ProfileComponent,
    SharedButtonComponent,
    ModHeaderComponent,
    TableLayoutComponent,

  ],
  providers : [
    SweetAlertService
  ]
})
export class SharedModule { }
