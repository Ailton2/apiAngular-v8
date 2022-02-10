import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatOptionModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from 'src/app/pages/componentes/header/header.component';
import { MenuComponent } from 'src/app/pages/componentes/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxCurrencyModule } from "ngx-currency";
import { MatTabsModule } from '@angular/material/tabs';

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
  BrowserAnimationsModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  BrowserModule,
  MatPaginatorModule,
  MatDialogModule,
  NgxMaskModule,
  MatDatepickerModule,
  MatNativeDateModule,
  NgxCurrencyModule ,
  MatTabsModule

];


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ...primeNGComponents
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    ReactiveFormsModule,
   ...primeNGComponents
 ],
 providers: [
  MatDatepickerModule
 ]

})
export class SharedModule { }
