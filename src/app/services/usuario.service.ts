import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http:HttpClient) { }

  urlUsuario = environment.api_URL+ 'usuario';

  urlProfissao = 'http://localhost:8080/apirest/profissao/list';

  getUsuarios():Observable<User>{
    return this.http.get<User>(this.urlUsuario)
  }

  delUsuarios(id:number):Observable<any>{
    return this.http.delete(this.urlUsuario+'/'+id)
  }

  postUsuario(user:any):Observable<any>{
    return  this.http.post(this.urlUsuario,user, { responseType: 'text' })
  }

  putUsuario(user:any):Observable<any>{
    return this.http.post(this.urlUsuario,user)
  }

  buscarPorNome(nome:string):Observable<any>{
    return this.http.get(this.urlUsuario+"/nome?nome="+nome);
  }

  buscarPorId(id:number):Observable<any>{
      return this.http.get(this.urlUsuario+`/${id}`);
  }

  deletarTelefone(id: any):Observable<any>{
    return this.http.delete(this.urlUsuario+`/fone/${id}`);
  }

  listProfissoes():Observable<any>{
    return this.http.get(this.urlProfissao);
  }

  downloadPdf():Observable<any>{
   return this.http.get(this.urlUsuario+`/relatorio`, { responseType: 'text'});
  }

  downloadPdfPorParams(dataInicio: string, dataFim: string):Observable<any>{
    return this.http.get(this.urlUsuario+`/relatorio/params?dataInicio=${dataInicio}&dataFim=${dataFim}`, { responseType: 'text'});
  }

  userAutentication(){
    if(localStorage.getItem("token") != null){
      return true;
    }else{
      return false;
    }
  }

}
