import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Animal } from "../models/animal.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private readonly rotaAnimal = "Animal";
  constructor(private http: HttpClient) {}

  listar(): Promise<Animal[]> {
    return this.http.get<Animal[]>(`${environment.servicoApi}/${this.rotaAnimal}`).toPromise();
  }

  cadastrar(animal: Animal): Promise<Animal> {
    return this.http
      .post<Animal>(`${environment.servicoApi}/${this.rotaAnimal}`, animal)
      .toPromise();
  }
}
