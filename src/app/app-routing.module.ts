import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }, 
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'incomes',
    loadChildren: () => import('./modules/incomes/incomes.module').then(m => m.IncomesModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./modules/expenses/expenses.module').then(m => m.ExpensesModule)
  },
  {
    path: 'entities',
    loadChildren: () => import('./modules/entities/entities.module').then(m => m.EntitiesModule)
  },
  

  {
    path : '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
