import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-testeapi',
  templateUrl: './testeapi.component.html',
  styleUrls: ['./testeapi.component.scss']
})
export class TESTEAPIComponent implements OnInit {

  funcionarios: Array<any>
  // funcionarios = [{id:1, nome: "teste"}, {id:1, nome: "teste2"}];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    // this.listar();
  }

  // listar() {
  //   this.funcionarioService.listar().subscribe(dados => this.funcionarios = dados);
  // }

}
