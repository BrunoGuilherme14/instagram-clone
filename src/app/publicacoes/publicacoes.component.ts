import { Component, OnInit } from '@angular/core';
import { Bd } from '../services/bd.service';
import * as firebase from 'firebase';
import { Publicacao } from '../model/publicacao.model';
import { Usuario } from '../model/usuario.model';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css'],
  providers: [
    Bd
  ]
})
export class PublicacoesComponent implements OnInit {
  public email:string
  public publicacoes:Array<any> = [];
  constructor(private bd:Bd) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user:any)=>{
      this.email = user.email
      this.consultaPublicacoes()
    })
  }

  public consultaPublicacoes():void {
    this.bd.getUsuario(this.email).then((usuario:Usuario) => {
      this.bd.getPublicacoes(usuario.email).then(res =>{
        res.forEach((element:any, index:number) => {
          let publicacao = element.val()
          publicacao.nome = usuario.nome
          publicacao.usuario = usuario.usuario
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

}
