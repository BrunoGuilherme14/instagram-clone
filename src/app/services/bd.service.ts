import { Injectable } from '@angular/core';
import { Publicacao } from '../model/publicacao.model';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { Usuario } from '../model/usuario.model';

@Injectable()
export class Bd {
    constructor(){}
    /**
     * incluirPublicacao
     */
    public progress:Subject<number> = new Subject();
    public incluirPublicacao(publicacao: Publicacao):Promise<any> {
        return firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push(publicacao).then(res =>{
            return firebase.storage().ref(`imagens/${publicacao.nomeImagem}`).put(publicacao.imagem).on(firebase.storage.TaskEvent.STATE_CHANGED, 
                (snapshot:any)=>{
                    let valueProgress = (snapshot.bytesTransferred *100) /  snapshot.totalBytes;
                    this.progress.next(Math.round(valueProgress));
                },
                (error:Error) => {
                    this.progress.next(null);
                    console.log('Error de imagem: ',error)
                },
                () => {
                    console.log("Upload completo")
                    this.progress.next(1000);
                }
            )
        })
    }
    public incluirComentario(publicacao:Publicacao): Promise<any> {
        return firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).child(`${publicacao.key}/comentarios`).push(publicacao.comentarios['key-temp']).then(comentario =>{
            return comentario
        })
    }
    public getComentarios(publicacao:Publicacao): Promise<any> {
        return firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).child(`${publicacao.key}/comentarios`).once('value').then((comentarios:any) =>{
            return comentarios.val()
        })
    }
    public getPublicacoes(email:string): Promise<any> {
        return firebase.database().ref(`publicacoes/${btoa(email)}`).orderByChild('datapublicacao').once('value').then((publicacoes:any) =>{
            return publicacoes
        })
    }
    public getImagem(nomeImagem:string) : Promise<string> { 
        return firebase.storage().ref().child(`imagens/${nomeImagem}`).getDownloadURL().then((url:string) =>{
            return url
        })
    }
    public getProgress():Subject<number> {
        return this.progress
    }
    public getUsuario(email:string): Promise<Usuario> {
        return firebase.database().ref(`usuario/${btoa(email)}`).once('value').then(usuario=>{
            return usuario.val()
        })
    }
}