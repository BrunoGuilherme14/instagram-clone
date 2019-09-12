import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('bannerAcesso', [
      state('void', style({
        transform: 'translateX(-100px)',
        opacity: 0
      })),
      state('criado', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => criado', animate('0.5s 0.5s ease-in-out'))
    ]),
    trigger('painel', [
      state('criado', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => criado', [
        style({transform: 'translateX(50px)', opacity: 0 }),
        animate('0.5s 0.5s ease-in-out', keyframes([
          style({ offset:1, opacity: 1, transform: 'translateX(0)'  })
          //Aqui pode ser adicionado vários styles
        ]))
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {
  public estadoBannerAcesso: string ='criado'
  public estadoPainel: string ='criado'
  public cadastro: boolean
  constructor() { }

  ngOnInit() {
  }
  public exibirCadastro($event) {
    this.cadastro = $event == 'cadastro'? true: false
  }
}
