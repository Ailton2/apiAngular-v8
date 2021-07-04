import { Telefone } from "./telefone.model";

export class User{
    id : number;
    login : string;
    nome: string;
    cpf: string;
    senha: string;
    telefones: Array<Telefone>;
}