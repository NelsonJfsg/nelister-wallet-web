import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { JwtService } from '../services/jwt.service';

export const authGuard: CanActivateFn = (route, state) => {

  const jwtService = inject(JwtService);
  const router = inject(Router);

  if(jwtService.getToken() == null){
    router.navigate(['/auth']);
    return false;
  }

  return true;
};
