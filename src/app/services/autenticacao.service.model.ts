import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import * as firebase from 'firebase';
import { Login } from '../model/login.model';

@Injectable()
export class Autenticacao {
    /**
     * cadastrarUsuario
     */
    public cadastrarUsuario(usuario: Usuario): Promise<firebase.auth.UserCredential> {
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
    }
    public login(info: Login): void {
        firebase.auth().signInWithEmailAndPassword(info.email, info.senha).then(res=>{
            console.log(res)
        }).catch(error=>{
            console.log(error);
        })
    }
    public setUsuarioDatabase(usuario: Usuario):void {
        delete usuario.senha
        firebase.database().ref(`usuario/`+btoa(usuario.email)).set(usuario)
    }
}