import { Component, OnInit } from '@angular/core';


export interface Animais {
  animal: string;
  nomeAnimal: string;
  raca: string;
  idadeAnimal: string;
}

const ELEMENT_DATA: Animais[] = [
  {animal: "Cachorro", nomeAnimal: 'Hydrogen', raca: "SRD", idadeAnimal: "7 meses"},
  {animal: "Cachorro", nomeAnimal: 'Helium', raca: "SRD", idadeAnimal: "9 meses"},
  {animal: "Gato", nomeAnimal: 'Lithium', raca: "SRD", idadeAnimal: "2 meses"},
  {animal: "Cachorro", nomeAnimal: 'Beryllium', raca: "SRD", idadeAnimal: "5 meses"},
  {animal: "Cahorro", nomeAnimal: 'Boron', raca: "SRD", idadeAnimal: "3 anos"},
  {animal: "Gato", nomeAnimal: 'Carbon', raca: "SRD", idadeAnimal: "4 meses"},
  {animal: "Gato", nomeAnimal: 'Nitrogen', raca: "SRD", idadeAnimal: "11 meses"},
  {animal: "Cachorro", nomeAnimal: 'Oxygen', raca: "SRD", idadeAnimal: "11 meses"},
  {animal: "Cachorro", nomeAnimal: 'Fluorine', raca: "SRD", idadeAnimal: "5 anos"},
  {animal: "Cachorro", nomeAnimal: 'Neon', raca: "SRD", idadeAnimal: "5 meses"},
];

@Component({
  selector: 'app-animais-interna',
  templateUrl: './animais-interna.component.html',
  styleUrls: ['./animais-interna.component.scss']
})

export class AnimaisInternaComponent implements OnInit {

  
  displayedColumns: string[] = ['animal', 'nomeAnimal', 'raca', 'idadeAnimal'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
