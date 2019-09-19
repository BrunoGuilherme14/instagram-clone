import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { NgbModalConfig, NgbModal, NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Publicacao } from '../model/publicacao.model'
import { Bd } from '../services/bd.service'
import * as firebase from 'firebase'
import { requiredFileType } from '../util/require-file-type.validator'

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css'],
  providers: [NgbModalConfig, NgbModal, Bd]
})
export class IncluirPublicacaoComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal, private bd: Bd, private cd: ChangeDetectorRef) {}
  public imagem: FileList;
  public formPublicacao: FormGroup = new FormGroup(
    {
      titulo: new FormControl(null,[Validators.required]),
      descricao: new FormControl(null,[Validators.required]),
      file: new FormControl(null,[Validators.required])
    },
  )
  public submitPublicacao():void {
    console.log(this.formPublicacao)
    const publicacao: Publicacao = new Publicacao(firebase.auth().currentUser.email ,this.formPublicacao.value.titulo, this.formPublicacao.value.descricao, this.imagem[0]);
    this.bd.incluirPublicacao(publicacao).then(res => {
      console.log('Sucesso: ', res);
    }).catch((error:Error) => {
      console.log(error)
    })
  }

  public onFileChange(event) {
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files.length) {
      this.imagem = (<HTMLInputElement>event.target).files;
    }
  }
  ngOnInit() {
  }
  
}
