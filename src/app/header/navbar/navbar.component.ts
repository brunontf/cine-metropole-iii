import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private _snackBar: MatSnackBar, private _router:Router){}

  logout(){
    if(sessionStorage.getItem('auth')){
      sessionStorage.removeItem('auth');
      this._router.navigate(['/login'])
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this._snackBar.open('Logout Realizado com Sucesso', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition:  'top',
      duration: 2000
    });
  }
}
