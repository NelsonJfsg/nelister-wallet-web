import { Component, OnDestroy, OnInit } from '@angular/core';
import { Button } from '../../interfaces/button.model';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AuthService } from '../../../../../modules/auth/services/auth.service';

const buttons = [
  { 
    id : 1, 
    isActive : false, 
    title: 'Inicio', 
    iconName: 'home', 
    route : '/wallet/home'
  },
  { 
    id : 2, 
    isActive : false, 
    title: 'Dashboard', 
    iconName: 'space_dashboard', 
    route : '/wallet/dashboard'
  },
  { 
    id : 3, 
    isActive : false, 
    title: 'Reportes', 
    iconName: 'file_copy', 
    route : '/wallet/reports'
  },
  { 
    id : 4, 
    isActive : false, 
    title: 'Ingresos', 
    iconName: 'account_balance_wallet', 
    route : '/wallet/incomes'
  },
  { 
    id : 5, 
    isActive : false, 
    title: 'Gastos', 
    iconName: 'payments', 
    route : '/wallet/expenses'
  },
  { 
    id : 6, 
    isActive : false, 
    title: 'Catalogos', 
    iconName: 'account_balance', 
    route : '/wallet/entities'
  },
];

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnDestroy {

  public isSidebarOpen : boolean = true; // * Controls the sidebar status
  public buttons : Button[] = buttons; // * Buttons to navigate
  private routerSubscription: Subscription = new Subscription(); // * Subscription to the router events

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.routerSubscription = this.getUrlAndSetActiveButton();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private getUrlAndSetActiveButton () : Subscription {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.setActiveButton(event.urlAfterRedirects);
    });
  }

  // * HTML Events
  public onLogout () : void {
    this.authService.logout();    
  }

  public changeSidebarStatus () : void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
    
  // * Private methods
  private setActiveButton(url: string): void {
    this.buttons.forEach(button => button.isActive = button.route === url);
  }

}
