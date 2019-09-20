import { Component, OnInit } from '@angular/core';
import { Autenticacao } from '../services/autenticacao.service';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IncluirPublicacaoComponent } from '../incluir-publicacao/incluir-publicacao.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private autenticacao: Autenticacao, private router:Router, private modalService: NgbModal) {
   }
  public successMessage: string

  ngOnInit() {
  }
  public sair():void {
    this.autenticacao.logout().then(res=>{
      this.router.navigate(['/'])
    })
  }
  openModal() {
    const modalRef = this.modalService.open(IncluirPublicacaoComponent);
    modalRef.componentInstance.successMessage.subscribe(message=>{
      this.successMessage = message;
    })
  }
}
