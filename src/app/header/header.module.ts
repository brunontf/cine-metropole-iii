import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FilmesRoutingModule } from '../filmes/filmes-routing.module';
import { LoginRoutingModule } from '../login/login-routing.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FilmesRoutingModule,
    LoginRoutingModule

  ],
  exports:[
    NavbarComponent,
  ]
})
export class HeaderModule { }
