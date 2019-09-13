import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import * as firebase from 'firebase';
import { Login } from '../model/login.model';

@Injectable()
export class Autenticacao {
    public token_id: string;
    /**
     * cadastrarUsuario
     */
    public cadastrarUsuario(usuario: Usuario): Promise<firebase.auth.UserCredential> {
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
    }
    public login(info: Login): Promise<firebase.auth.UserCredential> {
        return firebase.auth().signInWithEmailAndPassword(info.email, info.senha)
    }
    public setUsuarioDatabase(usuario: Usuario):void {
        delete usuario.senha
        firebase.database().ref(`usuario/`+btoa(usuario.email)).set(usuario)
    }
    public setIdToken():void {
        firebase.auth().currentUser.getIdToken().then(token=>{
            this.token_id = token
            localStorage.setItem('idToken',this.token_id)
        }).catch(error=>{
            console.log(error)
        })
    }
    public logout(): Promise<void> {
        return firebase.auth().signOut().then(res=> {
            this.token_id = undefined
            localStorage.removeItem('idToken')
        })
    }
    public getIdToken(): string {
        return this.token_id || localStorage.getItem('idToken')
    }
}