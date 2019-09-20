import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core'
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
  
  public errorMessage: string;
  @Output() successMessage: EventEmitter<string> = new EventEmitter();
  public imagem: FileList;
  public formPublicacao: FormGroup = new FormGroup(
    {
      titulo: new FormControl(null,[Validators.required]),
      descricao: new FormControl(null,[Validators.required]),
      file: new FormControl(null,[Validators.required])
    },
  )
  public submitPublicacao():void {
    this.formPublicacao.markAllAsTouched()
    if(this.formPublicacao.valid) {
      const nomeImagem: number = new Date(this.imagem[0].lastModified).getTime() + Date.now() + this.imagem[0].size;
      const publicacao: Publicacao = new Publicacao(firebase.auth().currentUser.email ,this.formPublicacao.value.titulo, this.formPublicacao.value.descricao, nomeImagem, this.imagem[0]);
      this.bd.incluirPublicacao(publicacao).then(res => {
        this.activeModal.dismiss('Cross click')
        this.successMessage.emit('Publicação realizada com sucesso!');
      }).catch((error:Error) => {
        this.errorMessage = error.message
      })
    }
  }

  public onFileChange(event) {
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files.length) {
      this.imagem = (<HTMLInputElement>event.target).files;
    }
  }
  ngOnInit() {
  }
  
}
