import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [

    // * Angular
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,

    // * Forms
    FormsModule,
    ReactiveFormsModule,

    // * Material Angular
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

  ],
  exports : [
    LoginPageComponent,
  ],
  providers: [
    AuthModule
  ]
})
export class AuthModule { }
