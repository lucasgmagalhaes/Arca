import { Parceiro } from './../models/parceiro.model';
import { ParceiroService } from './../services/parceiro.service';
import { Component, OnInit } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  parceiros: Parceiro[] = [];

  constructor(private parceiroService: ParceiroService) { }

  ngOnInit() {
     this.listar();
  }

  listar() {
    this.parceiroService.listar().subscribe(dados => this.parceiros = dados);
  }

}
