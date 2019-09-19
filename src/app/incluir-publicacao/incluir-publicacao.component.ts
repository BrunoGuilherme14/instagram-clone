import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  ngOnInit() {
  }

}
