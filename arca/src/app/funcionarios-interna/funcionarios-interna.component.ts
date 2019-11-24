import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { Observable} from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Funcionario } from "../models/funcionario.model";


export class FuncionarioDataSource extends DataSource<Funcionario> {
  constructor(private funcionarioService: FuncionarioService) {
    super();
  }
  connect(): Observable<Funcionario[]> {
    return this.funcionarioService.listar();
  }
  disconnect() { }
}

@Component({
  selector: 'app-funcionarios-interna',
  templateUrl: './funcionarios-interna.component.html',
  styleUrls: ['./funcionarios-interna.component.scss']
})


export class FuncionariosInternaComponent implements OnInit {
  dataSource = new FuncionarioDataSource(this.funcionarioService);
  displayedColumns: string[] = ['nome', 'dataNascimento', 'setor'];
  constructor(private funcionarioService: FuncionarioService) { }
  ngOnInit() {
   }
}
