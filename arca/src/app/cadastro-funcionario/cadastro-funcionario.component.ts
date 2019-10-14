import { Component, OnInit, NgModule } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';

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

  constructor() { }

  ngOnInit() {
  }

}


