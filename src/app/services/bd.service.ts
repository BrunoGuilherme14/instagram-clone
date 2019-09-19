import { Injectable } from '@angular/core';
import { Publicacao } from '../model/publicacao.model';
import * as firebase from 'firebase';

@Injectable()
export class Bd {
    constructor(){}
    /**
     * publicacao
     */
    public incluirPublicacao(publicacao: Publicacao):Promise<any> {
        console.log(publicacao)
        const nomeImagem: number = Date.now();
        return firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push(publicacao).then(res =>{
            firebase.storage().ref().child(`imagens/${nomeImagem}`).put(publicacao.imagem)
        })
    }
}