import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  urlUsuario = 'http://localhost:8080/apirest/usuario';

  

  getUsuarios():Observable<User>{
    return this.http.get<User>(this.urlUsuario)
  }

}
