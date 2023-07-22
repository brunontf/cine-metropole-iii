import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let router = inject(Router);
  let _snackBar = inject(MatSnackBar);

  if (sessionStorage.getItem('auth')) {
    return true;
  } else {
    _snackBar.open('Você Precisa Estar Logado Para Continuar!', '', {
      horizontalPosition: 'center',
      verticalPosition:  'top',
      duration: 2000
    });
    return router.parseUrl('/login');
  }

};
