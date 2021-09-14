import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {login:'',senha:''}

  constructor(private serviceLogin:LoginService,private router:Router) {
    if(localStorage.getItem('token') !== null){
      localStorage.clear();
    }
  }
  

  ngOnInit(): void {
  }


  logar(){
    this.serviceLogin.logar(this.usuario);
  }

}
