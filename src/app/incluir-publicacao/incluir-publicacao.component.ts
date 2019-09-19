import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Publicacao } from '../model/publicacao.model';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class IncluirPublicacaoComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal) {}

  public formPublicacao: FormGroup = new FormGroup(
    {
      titulo: new FormControl(null,[Validators.required]),
      descricao: new FormControl(null,[Validators.required])
    },
  )
  public submitPublicacao():void {
    const publicacao: Publicacao = new Publicacao(this.formPublicacao.value.titulo, this.formPublicacao.value.descricao);
    console.log(publicacao)
  }
  ngOnInit() {
  }
  
}
