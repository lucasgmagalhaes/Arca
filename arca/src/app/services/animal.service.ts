import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Animal } from "../models/animal.model";
import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private readonly rotaAnimal = "Animal";
  constructor(private http: HttpClient) {}

  listar(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${environment.contaApi}/${this.rotaAnimal}`);
  }

  cadastrar(animal: Animal): Promise<Animal> {
    return this.http
      .post<Animal>(`${environment.servicoApi}/${this.rotaAnimal}`, animal)
      .toPromise();
  }
}
