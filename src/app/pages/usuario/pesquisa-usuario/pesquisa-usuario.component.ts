import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-pesquisa-usuario',
  templateUrl: './pesquisa-usuario.component.html',
  styleUrls: ['./pesquisa-usuario.component.scss']
})
export class PesquisaUsuarioComponent implements OnInit {

  user = new User();
  usuarios: MatTableDataSource<Observable<User[]>>;
  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];
  retorno: any;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usuarioService: UsuarioService,private observableservice: ObservableService,
    public router: Router) {
    this.listUsuarios()
  }

  listUsuarios() {
    this.usuarioService.getUsuarios().subscribe((res: any) => {
      this.usuarios = new MatTableDataSource<Observable<User[]>>(res);
      this.usuarios.paginator = this.paginator
      this.paginator._intl.itemsPerPageLabel = 'Itens por página'
      this.paginator._intl.firstPageLabel = 'Primeira página'
      this.paginator._intl.lastPageLabel = 'Ultima página'
      this.paginator._intl.nextPageLabel = 'Proxima página'
      this.paginator._intl.previousPageLabel = 'página anterior'
    })

  }

  deletaUsuario(id: number) {
    this.usuarioService.delUsuarios(id).subscribe(res => {
      this.retorno = res
      this.listUsuarios()
    })

  }
  ngOnInit(): void {
   this.observableservice.getUserList().subscribe((u: any) =>{
     this.usuarios = u
   })
  }

  buscarPorNome() {
    this.usuarioService.buscarPorNome(this.user.nome).subscribe(res => {
      this.usuarios = res

    })
  }

  navigate() {
    this.router.navigate(['home/cadastro-usuario'], {skipLocationChange: true});
  }

  navigateEdit(id: any){
    this.router.navigate(['home/cadastro-usuario/'+id], {skipLocationChange: true});
  }

  imprimirPDF(){
    this.usuarioService.downloadPdf().subscribe((res: any) =>{
      fetch(res).then(res => res.blob()).then(res => window.open(URL.createObjectURL(res), '_blank'));
    })
  }

  visualizarRelUsuarioId(id: number) {
    this.usuarioService.visualizarRelUsuarioId(id).subscribe((res: any) => {
      fetch(res).then(res => res.blob()).then(res => window.open(URL.createObjectURL(res), '_blank'));

    })
  }
}

