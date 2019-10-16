import { Component, OnInit } from '@angular/core';

export interface Doacoes {
  nomeDoador: string;
  dataDoacao: string;
  cpfDoador: string;
  valorDoacao: number;
}

const ELEMENT_DATA: Doacoes[] = [
  {dataDoacao: "2019-10-10", nomeDoador: 'Hydrogen', cpfDoador: "321.987.525-98", valorDoacao: 100.00},
  {dataDoacao: "2019-10-09", nomeDoador: 'Helium', cpfDoador: "321.987.525-98", valorDoacao: 300.00},
  {dataDoacao: "2019-10-08", nomeDoador: 'Lithium', cpfDoador: "321.987.525-98", valorDoacao: 1000.00},
  {dataDoacao: "2019-10-07", nomeDoador: 'Beryllium', cpfDoador: "321.987.525-98", valorDoacao: 1000.00},
  {dataDoacao: "2019-10-06", nomeDoador: 'Boron', cpfDoador: "321.987.525-98", valorDoacao: 1000.00},
  {dataDoacao: "2019-10-05", nomeDoador: 'Carbon', cpfDoador: "321.987.525-98", valorDoacao: 200.00},
  {dataDoacao: "2019-10-04", nomeDoador: 'Nitrogen', cpfDoador: "321.987.525-98", valorDoacao: 300.00},
  {dataDoacao: "2019-10-03", nomeDoador: 'Oxygen', cpfDoador: "321.987.525-98", valorDoacao: 500.00},
  {dataDoacao: "2019-10-02", nomeDoador: 'Fluorine', cpfDoador: "321.987.525-98", valorDoacao: 1000.00},
  {dataDoacao: "2019-10-01", nomeDoador: 'Neon', cpfDoador: "321.987.525-98", valorDoacao: 100.00},
];

@Component({
  selector: 'app-doacao-interna',
  templateUrl: './doacao-interna.component.html',
  styleUrls: ['./doacao-interna.component.scss']
})

export class DoacaoInternaComponent implements OnInit {

  displayedColumns: string[] = ['dataDoacao', 'nomeDoador', 'cpfDoador', 'valorDoacao'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
