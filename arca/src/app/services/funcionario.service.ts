import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionarioUrl = 'https://contamicroservice.azurewebsites.net/api/Funcionario';
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Array<any>>(`${this.funcionarioUrl}`);
  }

  cadastrar(contato:any){
    return this.http.post(`${this.funcionarioUrl}`, contato);
  }
}
