import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioRequest } from 'src/app/model/request/usuario-request.model';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuariosRequest = new UsuarioRequest;
  displayedColumns: string[] = ['id', 'nome'];
  dataSource: any;

  constructor(private usuarioService: UsuarioService, private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.routerActive.snapshot.paramMap.get('id');
    if (id != null) {
      this.buscarPorId(id)
    }
  }

  salvarUsuario() {
    if (this.usuariosRequest.id != null) {
      console.log("eidtar")
      this.usuarioService.putUsuario(this.usuariosRequest).subscribe(res => {
        this.usuariosRequest = new UsuarioRequest;

      })
    } else {
      console.log("salvar")
      this.usuarioService.postUsuario(this.usuariosRequest).subscribe(res => {
        this.usuariosRequest = new UsuarioRequest;

      })
    }


  }

  buscarPorId(id: any) {
    this.usuarioService.buscarPorId(id).subscribe(res => {
      this.usuariosRequest = res
      this.dataSource = this.usuariosRequest.telefones
    })
  }

}
