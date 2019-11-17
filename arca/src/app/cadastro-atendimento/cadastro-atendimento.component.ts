import { Component, OnInit, NgModule } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { AtendimentoService } from '../services/atendimento.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@NgModule({})

@Component({
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.component.html',
  styleUrls: ['./cadastro-atendimento.component.scss']
})
export class CadastroAtendimentoComponent implements OnInit {
  atendimentoForm: FormGroup;
  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit() {
    // MaterialDesignModule
    this.atendimentoForm = new FormGroup({
      raca: new FormControl("", Validators.required),
      dataAtendimento: new FormControl("", Validators.required),
      tipoAtendimento: new FormControl("", Validators.required),
      descricao: new FormControl("", Validators.required),
    },
    )
  }
  get(field: string) {
    return this.atendimentoForm.get(field);
  }

  async cadastrar() {

    if (!this.atendimentoForm.valid) {
      alert("formulário inválido");
      // Deve exibir algo na tela para o usuário
      console.log("Formulário inválido");
    }

    await this.atendimentoService.cadastrar(this.atendimentoForm.value);
    alert("Atendimento cadastrado com sucesso");
    console.log("Atendimento cadastrado com sucesso");
  }

}
