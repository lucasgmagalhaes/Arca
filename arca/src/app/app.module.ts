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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';

import { LoginComponent } from './login/login.component';
import { RecaptchaV2Component } from './recaptcha-v2/recaptcha-v2.component';
import { CadastroAssociadoComponent } from './cadastro-associado/cadastro-associado.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroAnimalComponent } from './cadastro-animal/cadastro-animal.component';
import { CadastroParceiroComponent } from './cadastro-parceiro/cadastro-parceiro.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HomeAdocaoComponent } from './home-adocao/home-adocao.component';
import { HomeServicosComponent } from './home-servicos/home-servicos.component';
import { ROUTES } from './app.routing';
import { RouterModule } from '@angular/router';
import { DoacaoInternaComponent } from './doacao-interna/doacao-interna.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    RecaptchaV2Component,
    CadastroAssociadoComponent,
    CadastroFuncionarioComponent,
    CadastroAnimalComponent,
    CadastroParceiroComponent,
    DoacaoComponent,
    HomeComponent,
    FooterComponent,
    HomeAdocaoComponent,
    HomeServicosComponent,
    DoacaoInternaComponent,
    CadastroAtendimentoComponent
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
    CadastroFuncionarioComponent,
    RouterModule.forRoot(ROUTES),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
