import { Animal } from './../models/animal.model';
import { Component, OnInit } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { AnimalService } from '../services/animal.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { mergeMap, map } from 'rxjs/operators';
import { AnimalHome } from '../models/animal.home';


@Component({
  selector: 'app-home-adocao',
  templateUrl: './home-adocao.component.html',
  styleUrls: ['./home-adocao.component.scss']
})


export class HomeAdocaoComponent implements OnInit {
  public animal

  animais: Array<AnimalHome> = [];
  imgAleatoria: string;


  constructor(private animalService: AnimalService) { }
  ngOnInit() {
    this.listar();
    MaterialDesignModule;
  }

  listar() {
    this.animalService.listar().subscribe(animaisRetorno => {
      animaisRetorno.forEach(async (animal) => {
        this.animais.push(await this.criarAnimal(animal));
      });
    });
  }

  async criarAnimal(animal: Animal) {
    const novoAnimal: AnimalHome = animal;
    novoAnimal.img = await this.animalService.buscarImgAleatoria().toPromise();
    return novoAnimal;
  }

}