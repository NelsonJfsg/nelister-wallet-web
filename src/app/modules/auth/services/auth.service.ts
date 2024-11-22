import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.model';
import { UserSession } from '../../../shared/interfaces/user-session.model';
import { Observable } from 'rxjs';
import { JwtService } from '../../../core/services/jwt.service';
import { Router } from '@angular/router';

const routes = {
  auth : 'auth',
  login : 'login'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http : HttpClient,
    private jwtService : JwtService,
    private router : Router
  ) { }

  public login (user : User) : Observable<UserSession>{
    return this.http.post<UserSession>(`${routes.auth}/${routes.login}`, user);
  }
  
  public logout() : void {
    this.jwtService.destroyToken();
    this.router.navigate(['/auth']);
  }


}
