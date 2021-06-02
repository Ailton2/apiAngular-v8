import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {login:'',senha:''}

  constructor(private serviceLogin:LoginService) { }

  ngOnInit(): void {
  }

  logar(){
    this.serviceLogin.logar(this.usuario);
  }

}
