import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../componentes/index/index.component';
import { CadastroUsuarioComponent } from '../componentes/usuario/cadastro-usuario/cadastro-usuario.component';
import { PesquisaUsuarioComponent } from '../componentes/usuario/pesquisa-usuario/pesquisa-usuario.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'index', component: IndexComponent },
            { path: 'pesquisa-usuario', component: PesquisaUsuarioComponent },
            { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
            { path: 'cadastro-usuario/:id', component: CadastroUsuarioComponent },
            
            
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
