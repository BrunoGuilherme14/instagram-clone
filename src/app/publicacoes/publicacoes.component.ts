import { Component, OnInit } from '@angular/core';
import { Bd } from '../services/bd.service';
import * as firebase from 'firebase';
import { Publicacao } from '../model/publicacao.model';
import { Usuario } from '../model/usuario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comentario } from '../model/comentario.model';

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
        this.publicacoes = [];
        res.forEach((element:any, index:number) => {
          let publicacao = Object.assign(element.val(), usuario)
          publicacao = Object.assign(publicacao, {key: element.key})
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

  public adicionarComentario(publicacao: Publicacao):void {
    if(this.formComentario.valid) {
      const comentario: Comentario = new Comentario(this.formComentario.value.comentario, Date.now())
      publicacao.comentarios? publicacao.comentarios['key-temp'] = comentario: publicacao.comentarios = []; publicacao.comentarios['key-temp'] = comentario
      console.log(publicacao.comentarios['key-temp'])
      this.bd.incluirComentario(publicacao).then(res =>{
          this.formComentario.reset()
          this.bd.getComentarios(publicacao).then(comentarios=>{
            this.publicacoes.map(item =>{
              if(item.key == publicacao.key) item.comentarios = comentarios
              return item
            })
          })
      })
    }
  }
}
