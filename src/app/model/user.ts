import { Telefone } from "./telefone.model";

export class User{
    id : number;
    login : string;
    nome: string;
    cpf: string;
    senha: string;
    data_nascimento: Date;
    telefones: Array<Telefone>;
    profissao: number;
}