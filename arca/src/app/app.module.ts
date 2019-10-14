import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RecaptchaModule } from 'ng-recaptcha';

import { LoginComponent } from './login/login.component';
import { RecaptchaV2Component } from './recaptcha-v2/recaptcha-v2.component';
import { CadastroAssociadoComponent } from './cadastro-associado/cadastro-associado.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    RecaptchaV2Component,
    CadastroAssociadoComponent,
    CadastroFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    LoginComponent,
    RecaptchaModule,
    CadastroAssociadoComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
