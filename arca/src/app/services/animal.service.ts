import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Animal } from "../models/animal.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private readonly rotaAnimal = "animal";
  constructor(private http: HttpClient) {}

  listar(): Promise<Animal[]> {
    return this.http.get<Animal[]>(`${environment.contaApi}/${this.rotaAnimal}`).toPromise();
  }

  cadastrar(funcionario: Animal): Promise<Animal> {
    return this.http
      .post<Animal>(`${environment.contaApi}/${this.rotaAnimal}`, funcionario)
      .toPromise();
  }
}
