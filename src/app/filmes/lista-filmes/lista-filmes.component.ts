import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableDataSourcePaginator} from '@angular/material/table';
import { Filme } from 'src/app/model/Filme.model';
import { FilmesServiceService } from '../filmes-service.service';


@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss'],
})
export class ListaFilmesComponent implements OnInit {

  constructor(private _service:FilmesServiceService){}

  ngOnInit(): void {
    this.getAllFilmes();
  }
  
  dataSource!: MatTableDataSource<Filme, MatTableDataSourcePaginator>;
  displayedColumns: string[] = ['id', 'imagem', 'titulo', 'sinopse','actions'];
  isLoggedIn = sessionStorage.getItem('auth');

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllFilmes(){
    this._service.getMovies().subscribe((resp)=>{
      // console.log(resp);
      this.dataSource = new MatTableDataSource(resp);
    });
  }
  
  deleteFilme(id:number):void{
    this._service.deleteMovieById(id).subscribe(()=>{
      this.getAllFilmes();
    });
  }
  
}
