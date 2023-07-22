import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../model/Auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  url = 'http://localhost:3000/login'

  login(login: string, password: string): Observable<Auth> {
    return this._http.post<Auth>(this.url, { login, password });
  }
}
