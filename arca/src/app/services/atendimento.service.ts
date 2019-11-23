import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Atendimento } from "../models/atendimento.model";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';
@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  private readonly rotaAtendimento = "Atendimento";
  constructor(private http: HttpClient) { }


  listar(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${environment.gerenciaApi}/${this.rotaAtendimento}`);
  }

  cadastrar(atendimento: Atendimento): Promise<Atendimento> {
    return this.http
      .post<Atendimento>(`${environment.gerenciaApi}/${this.rotaAtendimento}`, atendimento).toPromise();
  }
}


