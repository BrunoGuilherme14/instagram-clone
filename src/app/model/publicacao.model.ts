import { Comentario } from './comentario.model';

export class Publicacao {
    constructor(
        public key:string,
        public email: string,
        public titulo:string,
        public descricao:string,
        public datapublicacao:number,
        public nomeImagem:number,
        public imagem:File,
        public comentarios:Array<Comentario>
    ){ }
}