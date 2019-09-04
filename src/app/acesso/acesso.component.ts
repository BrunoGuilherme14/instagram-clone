import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('bannerAcesso', [
      state('void', style({
        left: '-100px',
        opacity: 0
      })),
      state('criado', style({
        left: 0,
        opacity: 1
      })),
      transition('void => criado', animate('0.5s 0.5s ease-in-out'))
    ])
  ]
})
export class AcessoComponent implements OnInit {
  public estadoBannerAcesso: string ='criado'
  constructor() { }

  ngOnInit() {
  }

}
