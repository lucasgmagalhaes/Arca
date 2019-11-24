import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DadosLogin } from '../models/dadosLogin.model';
import { Associado } from '../models/associado.model';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {

  private readonly rotaAssociado = "associado";
  constructor(private http: HttpClient) { }

  login(dadosLogin: DadosLogin): Promise<Associado> {
    return this.http.post<Associado>(`${environment.contaApi}/${this.rotaAssociado}/autenticar`, dadosLogin).toPromise();
  }

  cadastrar(dadosAssociado: Associado) {
    return this.http.post<Associado>(`${environment.contaApi}/${this.rotaAssociado}`, dadosAssociado).toPromise();
  }

  alterar(dadosAssociado: Associado) {
    return this.http.put<Associado>(`${environment.contaApi}/${this.rotaAssociado}`, dadosAssociado).toPromise();
  }

  listarAssociado(id: number): Observable<Associado> {
    return this.http.get<Associado>(`${environment.contaApi}/${this.rotaAssociado}/${id}`);
  }
}
