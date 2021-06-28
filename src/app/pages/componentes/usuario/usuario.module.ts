import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { IndexComponent } from '../index/index.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PesquisaUsuarioComponent } from './pesquisa-usuario/pesquisa-usuario.component';
import { RouterModule } from '@angular/router';

const pagesComponents = [
  CadastroUsuarioComponent,
  IndexComponent
   
];


@NgModule({
  declarations: [
    ...pagesComponents,
    PesquisaUsuarioComponent
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
