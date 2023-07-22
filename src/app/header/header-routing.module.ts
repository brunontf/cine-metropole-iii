import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const routes: Routes = [
    // { path: 'nav', component: NavbarComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatSnackBarModule,],
    
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
