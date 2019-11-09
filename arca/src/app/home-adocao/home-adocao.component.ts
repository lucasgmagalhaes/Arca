import { Animal } from './../models/animal.model';
import { Component, OnInit } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { AnimalService } from '../services/animal.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-home-adocao',
  templateUrl: './home-adocao.component.html',
  styleUrls: ['./home-adocao.component.scss']
})

export class AnimalDataSource extends DataSource<any> {
  constructor(private animalService: AnimalService) {
    super();
  }
  connect(): Observable<Animal[]> {
    return this.animalService.listar();
  }
  disconnect() { }

  }


export class HomeAdocaoComponent implements OnInit {
  dataSource = new AnimalDataSource(this.animalService);
  displayedColumns: string[] = ['nome', 'descricao'];
  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    MaterialDesignModule;

  }
}
