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
  [{ path: 'cadastro-animal', component: CadastroAnimalComponent },
  { path: 'doacao', component: DoacaoComponent },
  { path: 'servicos', component: HomeServicosComponent },
  { path: 'adocao', component: HomeAdocaoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo:'/home' }];
