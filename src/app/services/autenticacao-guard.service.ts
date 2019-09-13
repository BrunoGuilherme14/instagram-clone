import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Autenticacao } from './autenticacao.service';

@Injectable()
export class AutenticacaoGuard implements CanActivate{
    constructor(private autenticacao: Autenticacao, private router:Router){}
    public canActivate():boolean {
        const autenticado:boolean = this.autenticacao.getIdToken()? true : false
        if(!autenticado) this.router.navigate(['/'])
        return this.autenticacao.getIdToken()? true : false
    }
}