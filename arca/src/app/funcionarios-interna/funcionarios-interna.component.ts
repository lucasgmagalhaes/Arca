import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Funcionario } from "../models/funcionario.model";

@Component({
  selector: 'app-funcionarios-interna',
  templateUrl: './funcionarios-interna.component.html',
  styleUrls: ['./funcionarios-interna.component.scss']
})



export class FuncionariosInternaComponent implements OnInit {

  dataSource = new FuncionarioDataSource(this.funcionarioService);
  displayedColumns: string[] = ['nome', 'dataNascimento', 'setor', 'id'];

  constructor(private funcionarioService: FuncionarioService) { }


  ngOnInit() { }

  deletar(id) {
    alert("oi");
    console.log(id);
    this.funcionarioService.deletar(id);
  }


}

export class FuncionarioDataSource extends DataSource<any> {
  constructor(private funcionarioService: FuncionarioService) {
    super();
  }
  connect(): Observable<Funcionario[]> {
    return this.funcionarioService.listar();
  }
  disconnect() { }

}
