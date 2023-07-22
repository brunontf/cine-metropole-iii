import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Filme } from 'src/app/model/Filme.model';
import { FilmesServiceService } from '../filmes-service.service';
import { last } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-novo-filme',
  templateUrl: './novo-filme.component.html',
  styleUrls: ['./novo-filme.component.scss']
  
})
export class NovoFilmeComponent implements OnInit  {
  constructor(private fb:FormBuilder , private _service:FilmesServiceService, 
              private _route : ActivatedRoute,private _router:Router, private _snackBar: MatSnackBar){}


  ngOnInit():void{
    this.createForm();
    this.verifyRoute();
  }
  
  filmeForm!: FormGroup;
  editMode = false;

  verifyRoute(): void {
    if (this._route.routeConfig?.path?.includes('edit')) {
      this.editMode = true;
      let filmeId:number = this._route.snapshot.params['id'];
      this.getFilmeById(filmeId);
    }
  }

  createForm(){
    this.filmeForm = this.fb.group({
      titulo: ['',[Validators.required]],
      sinopse: [''],
      imagem: [''],
    })
  }

  updateFilme(){
    let filme :Filme = {...this.filmeForm.getRawValue()};
    filme.id = this._route.snapshot.params['id'];
    
    this._service.putMovie(filme).subscribe(resp=>{
      // console.log('filme atualizado '+resp);
      this._router.navigate(['filmes/listaFilmes']);
      this.openSnackBar('Filme Atualizado Com Sucesso!');
    })
    
  }

  createFilme(){
    this._service.postMovie(this.filmeForm.getRawValue()).subscribe(resp=>{
      this._router.navigate(['filmes/listaFilmes']);
      this.openSnackBar('Filme Criado Com Sucesso!');
    });
  }

  getFilmeById(id:number){
    this._service.getMovieById(id).subscribe(resp=>{
      // console.log(resp);
      this.filmeForm.patchValue({...resp});
    })
  }

  openSnackBar(msg:string) {
    this._snackBar.open(msg, 'Ok', {
      horizontalPosition: 'center',
      verticalPosition:  'top',
      duration: 2000
    });
  }

}
