import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario.model';
import { Autenticacao } from 'src/app/services/autenticacao.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output('exibir') exibir: EventEmitter<string> = new EventEmitter<string>();
  public mensagemErro: string

  public formCadastro: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'nome': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z ]*")]),
    'usuario': new FormControl(null, [Validators.required]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)])
  });

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit() {
  }
  public clickLogin(): void {
    this.exibir.emit('login')
  }
  public submitCadastrar(): void {
    this.formCadastro.markAllAsTouched()
    if(this.formCadastro.valid) {
      const usuario: Usuario = new Usuario(this.formCadastro.value.email, this.formCadastro.value.nome, this.formCadastro.value.usuario, this.formCadastro.value.senha)
      this.autenticacao.cadastrarUsuario(usuario).then(res =>{
          this.autenticacao.setUsuarioDatabase(usuario)
          this.clickLogin()
      }).catch((error: Error)=>{
        this.mensagemErro = error.message
      });
    }
  }
}
