import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioRequest } from 'src/app/model/request/usuario-request.model';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuariosRequest = new UsuarioRequest;
  usuarios: Observable<User[]>;
  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];
  retorno: any;
  constructor(private usuarioService: UsuarioService) {

    this.listUsuarios()
  }

  listUsuarios() {
    this.usuarioService.getUsuarios().subscribe((res: any) => {
      this.usuarios = res
      console.log(this.usuarios)
    })

  }

  deletaUsuario(id: number) {
    this.usuarioService.delUsuarios(id).subscribe(res => {
      this.retorno = res
      this.listUsuarios()
    })
    
  }
  ngOnInit(): void {
  }

  salvarUsuario(){
     this.usuarioService.postUsuario(this.usuariosRequest).subscribe(res=>{
       console.log(res)
        this.listUsuarios()
        this.usuariosRequest= new UsuarioRequest;
     })
    
  }

  buscarPorNome(){
    this.usuarioService.buscarPorNome(this.usuariosRequest.nome).subscribe(res =>{
      this.usuarios =res
     
    })
  }
}
