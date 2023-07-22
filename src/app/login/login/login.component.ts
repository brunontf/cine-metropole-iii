import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _fb:FormBuilder, private _service:LoginService, private router: Router, 
              private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.createForm();
  }

  loginForm!:FormGroup;
  hide = true;

  createForm(){
    this.loginForm = this._fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required]
    });
  }

  login(){
    let { email, password } = this.loginForm.value;

    this._service.login(email,password).subscribe(()=>{
      sessionStorage.setItem('auth','true');
      this.openSnackBar();
      this.router.navigate(['/filmes/listaFilmes']);
    });
  }

  openSnackBar() {
    this._snackBar.open('Login Realizado com Sucesso', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition:  'top',
      duration: 2000
    });
  }
    

}
