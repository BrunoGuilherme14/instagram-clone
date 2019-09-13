import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login.model';
import { Autenticacao } from 'src/app/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output('exibir') exibir: EventEmitter<string> = new EventEmitter<string>();
  public mensagemErro:string
  public formLogin: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'senha': new FormControl(null, [Validators.required, Validators.minLength(6)])
  })

  constructor(private autenticacao: Autenticacao, private router: Router) { }

  ngOnInit() {
  }
  public clickCadastro():void {
    this.exibir.emit('cadastro')
  }
  public submitLogin():void {
    this.formLogin.markAllAsTouched()
    if(this.formLogin.valid) {
      const info = new Login(this.formLogin.value.email, this.formLogin.value.senha)
      this.autenticacao.login(info).then(res=>{
        this.autenticacao.setIdToken()
        this.router.navigate(['/home'])
      }).catch((error: Error)=>{
        this.mensagemErro = error.message
      });
    }
  }
}
