import { Injectable } from '@angular/core';
import { Publicacao } from '../model/publicacao.model';
import * as firebase from 'firebase';

@Injectable()
export class Bd {
    constructor(){}
    /**
     * incluirPublicacao
     */
    public incluirPublicacao(publicacao: Publicacao):Promise<any> {
        return firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push(publicacao).then(res =>{
            firebase.storage().ref().child(`imagens/${publicacao.nomeImagem}`).put(publicacao.imagem)
        })
    }
}