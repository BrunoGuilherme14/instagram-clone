import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import * as firebase from 'firebase';

@Injectable()
export class Autenticacao {
    /**
     * cadastrarUsuario
     */
    public cadastrarUsuario(usuario: Usuario): void {
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha).then(res =>{
            console.log(res)
            delete usuario.senha
            firebase.database().ref(`usuario/`+btoa(res.user.email)).set(usuario)
        }).catch(error=>{
            console.log(error);
        })
    }
}