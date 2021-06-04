import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  

  urlUsuario = 'http://localhost:8080/apirest/usuario';

  getUsuarios():Observable<any>{
    return this.http.get<any>(this.urlUsuario)
  }

}
