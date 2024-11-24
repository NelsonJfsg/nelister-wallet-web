import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JwtService } from '../../../../../core/services/jwt.service';
import { UserSession } from '../../../../interfaces/user-session.model';

@Component({
  selector: 'navbar-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent { 

  userSession : UserSession = {} as UserSession;
  @Input() isSidebarOpen : boolean = true;


  constructor(
    private jwtService: JwtService
  ) { 
    this.userSession = this.jwtService.getToken() ?? {} as UserSession;
  }

}
