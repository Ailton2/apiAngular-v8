import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioRequest } from '../model/request/usuario-request.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  urlLogin = "http://localhost:8080/apirest/login";
  url = "http://localhost:8080/apirest";
  


  constructor(private http: HttpClient, private router: Router) { }
  
  recuperar(login: any) {
    let user = new UsuarioRequest();
    user.login = login;
    return this.http.post(this.url+'/utils/recuperar', user).subscribe(dados => {
       alert(JSON.parse(JSON.stringify(dados)).error);
      },
        error => {
          console.error('Erro ao recuperar Login')
        }

      )

  }

  logar(usuario: any) {
    return this.http.post(this.urlLogin, JSON.stringify(usuario))
      .subscribe(dados => {
        const token = JSON.parse(JSON.stringify(dados)).Authorization.split(' ')[1];
        localStorage.setItem("token", token);

        if (localStorage.getItem('token') != null) {
          this.router.navigate(['/home']);
        }
      },
        error => {
          console.error('Erro ao fazer Login')
        }
      )
  }


}
