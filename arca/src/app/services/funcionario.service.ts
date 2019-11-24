import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Funcionario } from "../models/funcionario.model";
import { environment } from 'src/environments/environment';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { DadosLogin } from '../models/dadosLogin.model';

/**
 * eu prefiro usar *Promisse* no lugar de *Observable* no contenxto
 * de busca e envio de informações no servidor, quando eu n precisar repetir
 * essa operação com frequência. Por exemplo, como não é preciso enviar os dados
 * de cadastro para o servidor toda hora, eu não preciso ficar "observando" pela resposta
 * do servidor.
 */

@Injectable({
  providedIn: "root"
})
export class FuncionarioService {
  private readonly rotaFuncionario = "funcionario";
  constructor(private http: HttpClient) { }

  login(dadosLogin: DadosLogin): Promise<Funcionario> {
    return this.http.post<Funcionario>(`${environment.contaApi}/${this.rotaFuncionario}/autenticar`, dadosLogin).toPromise();
  }

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${environment.contaApi}/${this.rotaFuncionario}`);
  }

  cadastrar(funcionario: Funcionario): Promise<Funcionario> {
    return this.http
      .post<Funcionario>(`${environment.contaApi}/${this.rotaFuncionario}`, funcionario)
      .toPromise();
  }
  
  alterar(funcionario: Funcionario): Promise<Funcionario> {
    return this.http
      .put<Funcionario>(`${environment.contaApi}/${this.rotaFuncionario}`, funcionario)
      .toPromise();
  }

  listarFuncionario(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${environment.contaApi}/${this.rotaFuncionario}/${id}`);
  }
 
}
