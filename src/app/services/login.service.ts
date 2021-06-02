import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


urlLogin="http://localhost:8080/apirest/login";

  constructor(private http:HttpClient) { }


  logar(usuario:any){
   return this.http.post(this.urlLogin,JSON.stringify(usuario))
   .subscribe(dados =>{
     const token =JSON.parse(JSON.stringify(dados)).Authorization.split(' ')[1];
     localStorage.setItem("token",token);
   })

  }


}
