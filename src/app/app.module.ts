import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { UsuarioComponent } from './pages/componentes/usuario/usuario.component';
import { CampoColoridoDirective } from './pages/componentes/campo-colorido.directive';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared/shared.module';
import { IndexComponent } from './pages/componentes/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    CampoColoridoDirective,
    IndexComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    HomeModule,
    SharedModule
    
    

  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : InterceptorService,
    multi : true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
