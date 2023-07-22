import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _fb:FormBuilder){}

  ngOnInit(): void {
    this.createForm();
  }

  loginForm!:FormGroup;
  hide = true;

  createForm(){
    this.loginForm = this._fb.group({
      email: ['',[Validators.required, Validators.email]],
      pass: ['',Validators.required]
    });
  }

  login(){
    console.log(this.loginForm.value);
    
  }

}
