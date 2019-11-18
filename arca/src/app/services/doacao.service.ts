import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Doacao } from "../models/doacao.model";
import { environment } from "src/environments/environment";
import { Observable, ObservedValueOf, timer} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class DoacaoService {
  private readonly rotaDoacao = "doacao";
  constructor(private http: HttpClient) { }

  listar(): Observable<Doacao[]> {
    return this.http.get<Doacao[]>(`${environment.servicoApi}/${this.rotaDoacao}`);
  }

  listarAssociado(id: number): Observable<Doacao[]> {
    return this.http.get<Doacao[]>(`${environment.servicoApi}/${this.rotaDoacao}/Associado/${id}`);
  }

  cadastrar(doacao: Doacao): Promise<Doacao> {
    return this.http
      .post<Doacao>(`${environment.servicoApi}/${this.rotaDoacao}`, doacao)
      .toPromise();
  }
}
