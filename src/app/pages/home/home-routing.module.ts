import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../componentes/index/index.component';
import { UsuarioComponent } from '../componentes/usuario/usuario.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'index', component: IndexComponent },
            { path: 'usuarios', component: UsuarioComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
