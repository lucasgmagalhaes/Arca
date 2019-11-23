import { Component, OnInit } from '@angular/core';
import { ParceiroService } from '../services/parceiro.service';
import { Parceiro } from '../models/parceiro.model';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {

  parceiros: Parceiro[] = [];

  constructor(private parceiroService: ParceiroService) { }

  ngOnInit() {
     this.listar();
  }

  listar() {
    this.parceiroService.listar().subscribe(dados => this.parceiros = dados);
  }

}
