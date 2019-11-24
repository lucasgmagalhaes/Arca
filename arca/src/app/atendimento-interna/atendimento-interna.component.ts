import { AtendimentoService } from './../services/atendimento.service';
import { Atendimento } from './../models/atendimento.model';
import { Component, OnInit, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';

export class AtendimentoDataSource extends DataSource<Atendimento> {
  constructor(private atendimentoService: AtendimentoService) {
    super();
  }
  connect(): Observable<Atendimento[]> {
    return this.atendimentoService.listar();
  }
  disconnect() { }
}


@Component({
  selector: 'app-atendimento-interna',
  templateUrl: './atendimento-interna.component.html',
  styleUrls: ['./atendimento-interna.component.scss'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})

export class AtendimentoInternaComponent implements OnInit {
  atendimento: Atendimento [];
  dataSource = new AtendimentoDataSource(this.atendimentoService);
  displayedColumns: string[] = ['dataAtendimento', 'raca', 'tipoAtendimento', 'descricao'];
  constructor(private atendimentoService: AtendimentoService) { }
  ngOnInit()
   {
    
  this.atendimentoService.listar().subscribe(dados => this.atendimento = dados);
   }


  gerarRelatorio() {
    var doc = new jsPDF();
    var x = 20;
    doc.text(20, 10, 'ATENDIMENTOS');

    for (var i = 0; i < this.atendimento.length - 1; i++) 
    {
      doc.text(100, x, formatDate(this.atendimento[i].dataAtendimento.toString())); 
      doc.text(20, x, this.atendimento[i].tipoAtendimento.toString().toUpperCase()); 
      x += 10; 

    }
    doc.save('Atendimentos.pdf');
  }

}

function formatDate(data) 
{
    return (data.substr(0, 10).split('-').reverse().join('/'));
}    
