export class Publicacao {
    constructor(
        public email: string,
        public titulo:string,
        public descricao:string,
        public datapublicacao:number,
        public nomeImagem:number,
        public imagem:File
    ){ }
}