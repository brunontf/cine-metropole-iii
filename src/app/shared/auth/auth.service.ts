import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let router = inject(Router);

  if (sessionStorage.getItem('auth')) {
    return true;
  } else {
    console.error('Erro', 'Faça login novamente');
    return router.parseUrl('/login');
  }
};
