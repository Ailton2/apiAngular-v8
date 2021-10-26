import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardiaoGuard } from 'src/app/services/guardiao.guard';
import { IndexComponent } from '../componentes/index/index.component';
import { CadastroUsuarioComponent } from '../usuario/cadastro-usuario/cadastro-usuario.component';
import { ConsultaParametroComponent } from '../usuario/consulta-parametro/consulta-parametro.component';
import { PesquisaUsuarioComponent } from '../usuario/pesquisa-usuario/pesquisa-usuario.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'index', component: IndexComponent, canActivate: [GuardiaoGuard] },
            { path: 'pesquisa-usuario', component: PesquisaUsuarioComponent, canActivate: [GuardiaoGuard]},
            { path: 'cadastro-usuario', component: CadastroUsuarioComponent,canActivate: [GuardiaoGuard] },
            { path: 'cadastro-usuario/:id', component: CadastroUsuarioComponent, canActivate: [GuardiaoGuard]},
            { path: 'consulta-parametro', component: ConsultaParametroComponent,canActivate: [GuardiaoGuard]}
             
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
