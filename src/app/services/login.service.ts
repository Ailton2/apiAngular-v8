import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  urlLogin = "http://localhost:8080/apirest/login";


  constructor(private http: HttpClient, private router: Router) { }

  logar(usuario: any) {
    return this.http.post(this.urlLogin, JSON.stringify(usuario))
      .subscribe(dados => {
        const token = JSON.parse(JSON.stringify(dados)).Authorization.split(' ')[1];
        localStorage.setItem("token", token);

        if (localStorage.getItem('token') != null) {
          this.router.navigate(['home']);
        }

      },
        error => {
          console.error('Erro ao fazer Login')
        }

      )

  }


}
