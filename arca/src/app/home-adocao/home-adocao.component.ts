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

export class HomeAdocaoComponent implements OnInit {
  public animal
  constructor(private animalService: AnimalService) { }
  ngOnInit() {
    this.animal = this.animalService.listar();
    console.log(this.animal);
    MaterialDesignModule;
  }
}
