import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  urlUsuario = 'http://localhost:8080/apirest/usuarios';

  getUsuarios():Observable<User>{
    return this.http.get<User>(this.urlUsuario)
  }

  delUsuarios(id:number):Observable<any>{
    return this.http.delete(this.urlUsuario+'/'+id)
  }

  postUsuario(user:any):Observable<any>{
    return  this.http.post(this.urlUsuario,user)
  }

  buscarPorNome(nome:string):Observable<any>{

    return this.http.get(this.urlUsuario+"/nome?nome="+nome);
  }
}
