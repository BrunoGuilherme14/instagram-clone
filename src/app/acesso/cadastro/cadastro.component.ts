import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cadastro } from './cadastro.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output('exibir') exibir: EventEmitter<string> = new EventEmitter<string>();
  public formCadastro: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'nome': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z ]*")]),
    'usuario': new FormControl(null, [Validators.required]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });
  constructor() { }

  ngOnInit() {
  }
  public clickLogin(): void {
    this.exibir.emit('login')
  }
  public cadastrar(): void {
    this.formCadastro.markAllAsTouched()
    if(this.formCadastro.valid) {
      const formValues: Cadastro = new Cadastro(this.formCadastro.value.email, this.formCadastro.value.nome, this.formCadastro.value.usuario, this.formCadastro.value.senha)
      console.log(formValues)
    }
  }
}
