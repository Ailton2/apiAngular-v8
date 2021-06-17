import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<User[]>; 
  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];
  dataSource: any;

  constructor(private usuarioService:UsuarioService) {
  
      this.usuarioService.getUsuarios().subscribe((res:any) =>{
        this.usuarios = res
        this.dataSource = res
        console.log(this.usuarios)
      })
    
      
   }
  ngOnInit(): void {
  }

}
