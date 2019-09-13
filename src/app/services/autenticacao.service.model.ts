import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';

@Injectable()
export class Autenticacao {
    /**
     * cadastrarUsuario
     */
    public cadastrarUsuario(usuario: Usuario): void {
        console.log(usuario)
    }
}