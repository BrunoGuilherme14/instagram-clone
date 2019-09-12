import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output('exibir') exibir: EventEmitter<string> = new EventEmitter<string>();
  public formCadastro: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.minLength(10)]),
    'nome': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'usuario': new FormControl(null, [Validators.required]),
    'senha': new FormControl(null, [Validators.required]),
  });
  constructor() { }

  ngOnInit() {
  }
  public clickLogin(): void {
    this.exibir.emit('login')
  }
  public cadastrar(): void {
    console.log('form cadastro')
  }
}
