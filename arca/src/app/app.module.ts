import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';
import { FuncionarioService } from './services/funcionario.service';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';

import { LoginComponent } from './login/login.component';
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
import { AnimaisInternaComponent } from './animais-interna/animais-interna.component';
import { MenuInternoComponent } from './menu-interno/menu-interno.component';
import { TESTEAPIComponent } from './testeapi/testeapi.component';
import { FormatDatepickerComponent } from './format-datepicker/format-datepicker.component';
import { FuncionariosInternaComponent } from './funcionarios-interna/funcionarios-interna.component';
import { LoadingComponent } from './loading/loading.component';
import { AnimalService } from './services/animal.service';

//import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    CadastroAssociadoComponent,
    CadastroFuncionarioComponent,
    CadastroAnimalComponent,
    CadastroParceiroComponent,
    DoacaoComponent,
    HomeComponent,
    FooterComponent,
    HomeServicosComponent,
    DoacaoInternaComponent,
    CadastroAtendimentoComponent,
    AnimaisInternaComponent,
    MenuInternoComponent,
    TESTEAPIComponent,
    FormatDatepickerComponent,
    FuncionariosInternaComponent,
    LoadingComponent,
    HomeAdocaoComponent,
    TipoUsuarioComponent,
  //  MDBBootstrapModule,
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
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  //  MDBBootstrapModule.forRoot(),
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, FuncionarioService, AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
