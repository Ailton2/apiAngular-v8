import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ObservableService } from 'src/app/services/observable.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private setlistUser: any;
  listUser: any;
  constructor(private observableservice: ObservableService,private service: UsuarioService) { 


  }
  data: any; 
  token = localStorage.getItem('token');

  ngOnInit(): void {
    this.service.getUsuarios().subscribe((u) =>{
    this.setlistUser = u;
    this.listUser = this.setlistUser;

    })
  }

  getListFilter(value: string){
     const filter = this.setlistUser.filter((res: any)=>{
      console.log(res)
       return !res.login.indexOf(value.toLowerCase());
     })
     this.listUser = filter;
     console.log(filter)
     this.observableservice.setUserList(filter);
  }
}
