import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.service';

const routes: Routes = [
  {
    path: 'filmes',
    loadChildren: () => import('./filmes/filmes.module').then((m) => m.FilmesModule),
    // canActivate:[AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {path: '**', redirectTo: 'listaFilmes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
