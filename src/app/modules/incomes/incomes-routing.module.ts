import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomesPageComponent } from './pages/incomes-page/incomes-page.component';

const routes: Routes = [
  {
    path : '',
    component : IncomesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomesRoutingModule { }
