import { Injectable } from '@angular/core';
import { UserSession } from '../../shared/interfaces/user-session.model';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getToken() : UserSession | null {
    let userSessionString = window.localStorage.getItem('userSession') ?? '';
      
    return userSessionString != '' ? this.convertStringToUserSession(userSessionString) : null;
  }

  saveToken(userSession : UserSession) {

    let userSessionString = this.convertUserSessionToString(userSession);

    window.localStorage.setItem('userSession', userSessionString);

  }

  destroyToken() {
    window.localStorage.removeItem('userSession');
  }

  private convertUserSessionToString(userSession : UserSession) : string {
    return JSON.stringify(userSession);
  }

  private convertStringToUserSession(userSessionString : string) : UserSession {
    return JSON.parse(userSessionString);
  }

}
