import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { IndexComponent } from '../componentes/index/index.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PesquisaUsuarioComponent } from './pesquisa-usuario/pesquisa-usuario.component';
import { RouterModule } from '@angular/router';
import { ConsultaParametroComponent } from './consulta-parametro/consulta-parametro.component';

const pagesComponents = [
  CadastroUsuarioComponent,
  IndexComponent
   
];


@NgModule({
  declarations: [
    ...pagesComponents,
    PesquisaUsuarioComponent,
    ConsultaParametroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ...pagesComponents
  ]
})
export class UsuarioModule { }
