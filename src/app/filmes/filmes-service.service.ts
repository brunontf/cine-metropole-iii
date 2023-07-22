import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../model/Filme.model';
import { Observable, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesServiceService {

  constructor(private _http:HttpClient) { }

  url = 'http://localhost:3000/movies'

  getMovies():Observable<Filme[]>{
    return this._http.get<Filme[]>(this.url);
  }

  getMovieById(id:number):Observable<Filme>{
    return this._http.get(`${this.url}/${id}`);
  }

  deleteMovieById(id:number):Observable<void>{
    console.log("FILME "+id+" DELETADO COM SUCESSO")
    return this._http.delete<void>(`${this.url}/${id}`);
  }

  postMovie(filme: Filme): Observable<Filme> {
    return this.getLastId().pipe(
      switchMap((lastId) => {
        filme.id = lastId;
        return this._http.post(this.url, filme);
      })
    );
  }
  
  getLastId(): Observable<number> {
    return this.getMovies().pipe(
      map((resp) => {
        let lastId = Number(resp.pop()?.id ?? 0) + 1;
        return lastId;
      })
    );
  }

  putMovie(filme:Filme):Observable<Filme>{
    return this._http.put<Filme>(`${this.url}/${filme.id}`,filme);
  }


}
