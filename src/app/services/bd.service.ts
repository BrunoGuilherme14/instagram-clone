import { Injectable } from '@angular/core';
import { Publicacao } from '../model/publicacao.model';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

@Injectable()
export class Bd {
    constructor(){}
    /**
     * incluirPublicacao
     */
    public progress:Subject<number> = new Subject();
    public incluirPublicacao(publicacao: Publicacao):Promise<any> {
        return firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push(publicacao).then(res =>{
            return firebase.storage().ref().child(`imagens/${publicacao.nomeImagem}`).put(publicacao.imagem).on(firebase.storage.TaskEvent.STATE_CHANGED, 
                (snapshot:any)=>{
                    let valueProgress = (snapshot.bytesTransferred *100) /  snapshot.totalBytes;
                    this.progress.next(Math.round(valueProgress));
                },
                (error:Error) => {
                    this.progress.next(null);
                    console.log(error)
                },
                () => {
                    console.log("Upload completo")
                    this.progress.next(100);
                }
            )
        })
    }
    public getProgress():Subject<number> {
        return this.progress
    }
}