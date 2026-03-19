import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

   // ✅ Allow all admin routes for now
  if (state.url.startsWith('/admin')) {
    return true;
  }
  
  if (auth.isAuthenticated()) {
    return true;
  }
 

  // Redirect to login with return URL
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
