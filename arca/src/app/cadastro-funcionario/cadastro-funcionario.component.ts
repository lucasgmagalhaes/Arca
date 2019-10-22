import { Component, OnInit, NgModule } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FuncionarioService } from '../services/funcionario.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})

@NgModule({
  exports: [
    MaterialDesignModule
  ]
})

export class CadastroFuncionarioComponent implements OnInit {
  contato: any;

  // constructor() { }
  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.contato = {};
  }

  cadastrar(frm: FormGroup){
    this.funcionarioService.cadastrar(this.contato).subscribe(resposta => 200)
    frm.reset();
  }

}


