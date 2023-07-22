import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { NovoFilmeComponent } from './novo-filme/novo-filme.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmesRoutingModule } from './filmes-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ListaFilmesComponent,
    NovoFilmeComponent
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    
  ]
})

export class FilmesModule { }
