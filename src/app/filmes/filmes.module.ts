import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';



@NgModule({
  declarations: [
    ListaFilmesComponent,
    NovoFilmeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FilmesModule { }
