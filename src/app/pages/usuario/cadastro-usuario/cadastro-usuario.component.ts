import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";
import { Profissao } from "src/app/model/profissao.model";
import { UsuarioRequest } from "src/app/model/request/usuario-request.model";
import { Telefone } from "src/app/model/telefone.model";
import { User } from "src/app/model/user";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-cadastro-usuario",
  templateUrl: "./cadastro-usuario.component.html",
  styleUrls: ["./cadastro-usuario.component.scss"],
})
export class CadastroUsuarioComponent implements OnInit {
  usuariosRequest = new UsuarioRequest();
  displayedColumns: string[] = ["id", "numero", "acao"];
  dataSource: any;
  novaDataSourc: any;
  telefone = new Telefone();
  telefones: any;
  profissoes: Array<Profissao>;
  profissaoSelecionada: any;

  constructor(
    private usuarioService: UsuarioService,
    private routerActive: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.usuarioService.listProfissoes().subscribe((p) => {
      this.profissoes = p;
    });

    let id = this.routerActive.snapshot.paramMap.get("id");
    if (id != null) {
      this.buscarPorId(id);
    }
  }

  salvarUsuario() {
    if (this.usuariosRequest.id != null) {
      this.usuarioService.putUsuario(this.usuariosRequest).subscribe((res) => {
        this.usuariosRequest = new UsuarioRequest();
        this.dataSource = null;
        this.limparLocalStorage();
      });
    } else {
      this.usuarioService.postUsuario(this.usuariosRequest).subscribe((res) => {
        this.usuariosRequest = new UsuarioRequest();
        this.dataSource = [];
        this.limparLocalStorage();
      });
    }
  }

  limparLocalStorage() {
    if (localStorage.getItem("Usuario")) {
      localStorage.removeItem("Usuario");
    }
  }

  buscarPorId(id: any) {
    this.usuarioService.buscarPorId(id).subscribe((res) => {
      this.usuariosRequest = res;
      this.dataSource = this.usuariosRequest.telefones;
    });
  }

  deletarTel(id: any, i: any) {
    if (id == null) {
      this.usuariosRequest.telefones.splice(i, 1);
      this.novaDataSourc = this.usuariosRequest.telefones;
      this.dataSource = new MatTableDataSource<Element>(this.novaDataSourc);
      return;
    }
    if (id !== null) {
      this.usuarioService.deletarTelefone(id).subscribe((res) => {
        this.usuariosRequest.telefones.splice(i, 1);
        this.novaDataSourc = this.usuariosRequest.telefones;
        this.dataSource = new MatTableDataSource<Element>(this.novaDataSourc);
      });
    }
  }

  addTel() {
    if (this.usuariosRequest.telefones === undefined) {
      this.usuariosRequest.telefones = new Array<Telefone>();
    }

    this.usuariosRequest.telefones.push(this.telefone);
    this.telefones = this.usuariosRequest.telefones;
    this.telefone = new Telefone();
    this.dataSource = new MatTableDataSource<Element>(this.telefones);
  }

  navigate() {
    this.router.navigate(["home/pesquisa-usuario"], {
      skipLocationChange: true,
    });
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log("index => ", tabChangeEvent.index);
    localStorage.setItem("Usuario", JSON.stringify(this.usuariosRequest));
  };
}
