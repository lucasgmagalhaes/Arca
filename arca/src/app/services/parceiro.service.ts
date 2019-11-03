import { Injectable } from '@angular/core';
import { Parceiro } from '../models/parceiro.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParceiroService {

  constructor(private http: HttpClient) { }

  cadastrar(parceiro: Parceiro) {
    return this.http.post(`${environment.gerenciaApi}/parceiro`, parceiro).toPromise();
  }
}
