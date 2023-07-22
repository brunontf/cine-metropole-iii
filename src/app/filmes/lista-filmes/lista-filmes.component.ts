import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableDataSourcePaginator} from '@angular/material/table';
import { Filme } from 'src/app/model/Filme.model';
import { FilmesServiceService } from '../filmes-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss'],
})
export class ListaFilmesComponent implements OnInit {

  constructor(private _service:FilmesServiceService, private _snackBar:MatSnackBar){}

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
    if(window.confirm("Deseja Mesmo Excluir o Filme ?")){
      this._service.deleteMovieById(id).subscribe(()=>{
        this.getAllFilmes();
        this.openSnackBar('Filme Deletado Com Sucesso!');
      });
    }
  }

  openSnackBar(msg:string) {
    this._snackBar.open(msg, 'Ok', {
      horizontalPosition: 'center',
      verticalPosition:  'top',
      duration: 2000,
    });
  }
  
}
