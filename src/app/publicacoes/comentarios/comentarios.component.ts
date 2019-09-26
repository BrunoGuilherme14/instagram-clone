import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input('comentarioPublicacao') comentarioPublicacao: any;
  constructor() { }

  ngOnInit() {
  }

}
