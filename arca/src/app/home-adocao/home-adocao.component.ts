import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal.model';
import { AnimalService } from '../services/animal.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-adocao',
  templateUrl: './home-adocao.component.html',
  styleUrls: ['./home-adocao.component.scss']
})
export class HomeAdocaoComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    // MaterialDesignModule
  }
  async listar() {


    await this.animalService.listar();

    console.log(this.animalService.listar());
  }
}

// export class AnimalInternaComponent implements OnInit {

//   // dataSource = new AnimalDataSource(this.animalService);
//   displayedColumns: string[] = ['nome', 'descricao'];



//   ngOnInit() { }



// }

// export class AnimalDataSource extends DataSource<any> {
//   constructor(private animalService: AnimalService) {
//     super();
//   }
//   connect(): Promise<Animal[]> {
//     return this.animalService.listar();
//   }
//   disconnect() { }

// }



