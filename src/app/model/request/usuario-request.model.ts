import { Profissao } from "../profissao.model";
import { Telefone } from "../telefone.model";

export class UsuarioRequest{
    id: number;
    login: string;
    nome: string;
    cpf: string;
    senha: string;
    telefones: Array<Telefone>;
    data_nascimento: Date;
    profissao: number;
    salario: number;
    email: string;
}