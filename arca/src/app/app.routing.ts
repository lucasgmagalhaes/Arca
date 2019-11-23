import { DoacaoInternaComponent } from './doacao-interna/doacao-interna.component';
import { CadastroAssociadoComponent } from './cadastro-associado/cadastro-associado.component';
import {
  Routes
}
  from '@angular/router';
import { CadastroAnimalComponent } from './cadastro-animal/cadastro-animal.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { HomeServicosComponent } from './home-servicos/home-servicos.component';
import { HomeAdocaoComponent } from './home-adocao/home-adocao.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroParceiroComponent } from './cadastro-parceiro/cadastro-parceiro.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { ParceirosComponent } from './parceiros/parceiros.component';

export const ROUTES: Routes =
  [{ path: 'cadastro-animal', component: CadastroAnimalComponent },
  { path: 'cadastro-funcionario', component: CadastroFuncionarioComponent },
  { path: 'cadastro-associado', component: CadastroAssociadoComponent },
  { path: 'cadastro-parceiro', component: CadastroParceiroComponent },
  { path: 'cadastro-atendimento', component: CadastroAtendimentoComponent },
  { path: 'doacao', component: DoacaoComponent },
  { path: 'servicos', component: HomeServicosComponent },
  { path: 'adocao', component: HomeAdocaoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tipo-usuario', component: TipoUsuarioComponent },
  { path: 'doacao-interna', component: DoacaoInternaComponent },
  { path: 'parceiros', component: ParceirosComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }];
