import { Component, OnInit } from '@angular/core';
import { Bd } from '../services/bd.service';
import * as firebase from 'firebase';
import { Publicacao } from '../model/publicacao.model';
import { Usuario } from '../model/usuario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css'],
  providers: [
    Bd
  ]
})
export class PublicacoesComponent implements OnInit {
  public formComentario: FormGroup = new FormGroup({
    comentario: new FormControl('', [Validators.maxLength(255)])
  })
  public publicacoes:Array<any> = [];
  private email: string;

  constructor(private bd:Bd) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user:any)=>{
      this.email = user.email;
      this.consultaPublicacoes()
    })
  }

  public consultaPublicacoes():void {
    this.bd.getUsuario(this.email).then((usuario:Usuario) => {
      this.bd.getPublicacoes(usuario.email).then(res =>{
        res.forEach((element:any, index:number) => {
          let publicacao = Object.assign(element.val(), usuario)
          this.publicacoes.unshift(publicacao)
          this.bd.getImagem(publicacao.nomeImagem).then((url:string)=>{
            this.publicacoes.map(item =>{
              if(item.nomeImagem == publicacao.nomeImagem) item.urlImagem = url
              return item
            })
          })
        })
      })
    })
  }

  public adicionarComentario():void {
    console.log(this.formComentario.value)
  }
}
