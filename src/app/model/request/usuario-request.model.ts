import { Telefone } from "../telefone.model";

export class UsuarioRequest{
    id: number;
    login: string;
    nome: string;
    cpf: string;
    senha: string;
    telefones: Telefone[];
}