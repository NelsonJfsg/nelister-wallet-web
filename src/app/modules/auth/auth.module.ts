import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

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
    MatButtonModule,
    MatIconModule,

    

  ],
  exports : [
    LoginPageComponent,
  ],
  providers: [
    AuthModule
  ]
})
export class AuthModule { }
