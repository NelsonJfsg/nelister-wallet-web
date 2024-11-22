import { inject } from '@angular/core';
import { Router, type CanDeactivateFn } from '@angular/router';
import { JwtService } from '../services/jwt.service';

export const isLoggedGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  const jwtService = inject(JwtService);
  const router = inject(Router);
  
  if(jwtService.getToken() != null){ 
    router.navigate(['/wallet']);
    return false;

  }
  
  return true;
};
