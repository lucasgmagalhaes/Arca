import { DoacaoService } from './../services/doacao.service';
import { Doacao } from './../models/doacao.model';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-doacao-interna',
  templateUrl: './doacao-interna.component.html',
  styleUrls: ['./doacao-interna.component.scss']
})

export class DoacaoInternaComponent implements OnInit {

  doacoes: Doacao[] = [];

  constructor(private doacaoService: DoacaoService, private userLogado: SessionService) { }

  ngOnInit() {

    if (this.userLogado.getType() == "associado") {
      this.listarAssociado();
    }
    else if (this.userLogado.getType() == "funcionario" || this.userLogado.getType() == "admin") {
      this.listar();
    }
   
  }

  listarAssociado() {
    this.doacaoService.listarAssociado(this.userLogado.getUserId()).subscribe(dados => this.doacoes = dados);
  }

  listar() {
    this.doacaoService.listar().subscribe(dados => this.doacoes = dados);
 
  }
}