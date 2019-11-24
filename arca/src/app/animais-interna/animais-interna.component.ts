import { AnimalService } from './../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from "../models/animal.model";
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

export class AnimalDataSource extends DataSource<Animal> {
  constructor(private animalService: AnimalService) {
    super();
  }
  connect(): Observable<Animal[]> {
    return this.animalService.listar();
  }
  disconnect() { }
}

@Component({
  selector: 'app-animais-interna',
  templateUrl: './animais-interna.component.html',
  styleUrls: ['./animais-interna.component.scss']
})

export class AnimaisInternaComponent implements OnInit {

  dataSource = new AnimalDataSource(this.animalService);
  displayedColumns: string[] = ['especie', 'nome', 'raca', 'isDisponivelParaAdoacao'];
  constructor(private animalService: AnimalService) { }
  ngOnInit() { }

  isAnimalDisponivel(isDisponivel: boolean) {
    return isDisponivel ? 'Sim' : 'Não';
  }
}
