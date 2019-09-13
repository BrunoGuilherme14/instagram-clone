import { Component, OnInit } from '@angular/core';
import { Autenticacao } from '../services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private autenticacao: Autenticacao, private router:Router) { }

  ngOnInit() {
  }
  public sair():void {
    this.autenticacao.logout().then(res=>{
      this.router.navigate(['/'])
    })
  }
}
