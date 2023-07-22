import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _fb:FormBuilder, private _service:LoginService, private router: Router){}

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
      sessionStorage.setItem('auth','true')
      this.router.navigate(['/filmes/listaFilmes']);
    });

    // this._service
    //   .login(email, password)
    //   .pipe(take(1))
    //   .subscribe({
    //     next: (value) => {
    //       console.log(value.auth);
          
    //       sessionStorage.setItem('auth', String(value.auth));
    //       this.router.navigate(['/cats/search']);
    //     },
        // error: (err: HttpErrorResponse) => {
        //   if (err.status == 401) {
        //     this.toast.error('Erro!', 'Usuário ou senha inválidos!');
        //   } else {
        //     this.toast.error('Erro!', 'Ocorreu um erro, teste novamente!');
        //   }
        // },
      // });
  }
    

}
