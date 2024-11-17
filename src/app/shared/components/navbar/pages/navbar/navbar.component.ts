import { Component, OnDestroy, OnInit } from '@angular/core';
import { Button } from '../../interfaces/button.model';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

const buttons = [
  { 
    id : 1, 
    isActive : false, 
    title: 'Inicio', 
    iconName: 'home', 
    route : '/home'
  },
  { 
    id : 2, 
    isActive : false, 
    title: 'Dashboard', 
    iconName: 'space_dashboard', 
    route : '/dashboard'
  },
  { 
    id : 3, 
    isActive : false, 
    title: 'Reportes', 
    iconName: 'file_copy', 
    route : '/reports'
  },
  { 
    id : 4, 
    isActive : false, 
    title: 'Ingresos', 
    iconName: 'account_balance_wallet', 
    route : '/incomes'
  },
  { 
    id : 5, 
    isActive : false, 
    title: 'Gastos', 
    iconName: 'payments', 
    route : '/expenses'
  },
  { 
    id : 6, 
    isActive : false, 
    title: 'Entidades', 
    iconName: 'account_balance', 
    route : '/entities'
  },
];

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  public buttons : Button[] = buttons;
  
  private routerSubscription: Subscription = new Subscription();

  constructor(
    private router: Router
  ) {
    this.routerSubscription = this.getUrlAndSetActiveButton();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('NavbarComponent ngOnDestroy');
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private getUrlAndSetActiveButton() : Subscription {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.setActiveButton(event.urlAfterRedirects);
    });
  }

  private setActiveButton(url: string): void {
    this.buttons.forEach(button => button.isActive = button.route === url);
  }

}
