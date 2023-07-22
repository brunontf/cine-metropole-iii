import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';

const routes: Routes = [
  {path: 'listaFilmes', component:ListaFilmesComponent},
  {path: 'addFilme', component:NovoFilmeComponent},
  {path: 'edit/:id', component: NovoFilmeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
