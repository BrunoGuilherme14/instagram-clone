import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Banner } from './banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('0.4s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {
  public estadoBanner: string = "escondido"
  public banners: Banner[] = [
    {estado: 'visivel', url: '/assets/banner-acesso/img_1.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_2.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_3.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_4.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_5.png'}
  ]

  constructor() { }

  ngOnInit() {
    this.toogleEstadoAnimacao()
  }
  public toogleEstadoAnimacao(): void {
    let indexEscondido = 0;
    let indexVisivel =1
    setInterval( v =>{
      this.banners[indexEscondido].estado = 'escondido'
      this.banners[indexVisivel].estado = 'visivel'
      indexEscondido == this.banners.length - 1? indexEscondido = 0: indexEscondido++
      indexVisivel = indexEscondido == this.banners.length - 1? 0 : indexEscondido+1;
    },800)
  }
}
