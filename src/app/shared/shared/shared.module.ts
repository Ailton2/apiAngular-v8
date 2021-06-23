import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from 'src/app/pages/componentes/header/header.component';
import { MenuComponent } from 'src/app/pages/componentes/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';



const primeNGComponents = [
  HttpClientModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  FlexLayoutModule,
  MatCardModule,
  MatPseudoCheckboxModule,
  FormsModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule,
  MatTableModule,
  MatSidenavModule,
  MatToolbarModule,
];


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...primeNGComponents 
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
   ...primeNGComponents
 ]

})
export class SharedModule { }
