import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './footer/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatToolbarModule,

  ],
  exports:[
    FooterComponent,
  ]
})
export class SharedModule { }
