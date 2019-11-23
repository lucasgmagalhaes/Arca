import { AtendimentoService } from './../services/atendimento.service';
import { Atendimento } from './../models/atendimento.model';
import { Component, OnInit, VERSION } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';


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
  styleUrls: ['./atendimento-interna.component.scss']
})

export class AtendimentoInternaComponent implements OnInit {
  dataSource = new AtendimentoDataSource(this.atendimentoService);
  displayedColumns: string[] = ['dataAtendimento', 'raca', 'tipoAtendimento', 'descricao'];
  constructor(private atendimentoService: AtendimentoService) { }
  ngOnInit() { }


  // version = VERSION.full;
  
  // formatsDateTest: string[] = [
  //   'dd/MM/yyyy'
  //   ];
  
  // dateNow : Date = new Date();
  // dateNowISO = this.dateNow.toISOString();
  // dateNowMilliseconds = this.dateNow.getTime();


}
