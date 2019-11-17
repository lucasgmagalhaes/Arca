import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Animal } from "../models/animal.model";
import { environment } from "src/environments/environment";
import { Observable, ObservedValueOf, timer} from "rxjs";
import { map, debounceTime } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class AnimalService {
  private readonly rotaAnimal = "animal";
  constructor(private http: HttpClient) {}

  listar(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${environment.servicoApi}/${this.rotaAnimal}`);
  }

  cadastrar(animal: Animal): Promise<Animal> {
    return this.http
      .post<Animal>(`${environment.servicoApi}/${this.rotaAnimal}`, animal)
      .toPromise();
  }

  buscarImgAleatoria(): Observable<string> {
    return this.http.get<string>("https://dog.ceo/api/breeds/image/random").pipe(map(resultado => resultado["message"]));

  }
}
