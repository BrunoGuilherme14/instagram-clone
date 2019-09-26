import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comentario } from 'src/app/model/comentario.model';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input('comentarioPublicacao') comentarioPublicacao: any;
  @Output() excluirComentario: EventEmitter<Comentario> = new EventEmitter<Comentario>()

  constructor() { }

  ngOnInit() {
  }
  public excluir():void {
    this.excluirComentario.emit(this.comentarioPublicacao)
  }
}
