import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
      state('void', style({
        transform: 'translateX(50px)',
        opacity: 0
      })),
      state('criado', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => criado', animate('0.5s 0.5s ease-in-out'))
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

}
