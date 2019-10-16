import {
  Routes
}
  from '@angular/router';
import { CadastroAnimalComponent } from './cadastro-animal/cadastro-animal.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { HomeServicosComponent } from './home-servicos/home-servicos.component';
import { HomeAdocaoComponent } from './home-adocao/home-adocao.component';
import { HomeComponent } from './home/home.component';


export const ROUTES: Routes =
  [{ path: 'cadastroanimal', component: CadastroAnimalComponent },
  { path: 'doacao', component: DoacaoComponent },
  { path: 'homeServicos', component: HomeServicosComponent },
  { path: 'homeAdocao', component: HomeAdocaoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo:'/home' }];
