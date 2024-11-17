import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntitiesPageComponent } from './pages/entities-page/entities-page.component';

const routes: Routes = [
  {
    path : '',
    component : EntitiesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitiesRoutingModule { }
