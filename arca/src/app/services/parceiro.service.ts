import { Injectable } from "@angular/core";
import { Parceiro } from "../models/parceiro.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, Subject, ReplaySubject, from, of, range } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ParceiroService {
  private readonly rotaParceiro = "parceiro";
  constructor(private http: HttpClient) { }

  cadastrar(parceiro: Parceiro) {
    return this.http.post(`${environment.gerenciaApi}/${this.rotaParceiro}`, parceiro).toPromise();
  }

  listar(): Observable<Parceiro[]> {
    return this.http.get<Parceiro[]>(`${environment.contaApi}/${this.rotaParceiro}`);
  }

}
