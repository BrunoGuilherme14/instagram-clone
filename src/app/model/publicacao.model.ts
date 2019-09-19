export class Publicacao {
    constructor(
        public email: string,
        public titulo:string,
        public descricao:string,
        public imagem:File
    ){ }
}