import { Funcionario } from './../models/funcionario.model';
import { SessionService } from './../services/session.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { AtendimentoService } from '../services/atendimento.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { LoadingService } from '../services/loading.service';
import { MatSnackBar } from '@angular/material';

@NgModule({})

@Component({
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.component.html',
  styleUrls: ['./cadastro-atendimento.component.scss']
})
export class CadastroAtendimentoComponent implements OnInit {
  atendimentoForm: FormGroup;
  constructor(private atendimentoService: AtendimentoService, private userLogado: SessionService, private loading: LoadingService, private notificacao: MatSnackBar) { }

  ngOnInit() {
    // MaterialDesignModule
    this.atendimentoForm = new FormGroup({
      raca: new FormControl("", Validators.required),
      data: new FormControl("", Validators.required),
      tipoAtendimento: new FormControl("", Validators.required),
      descricao: new FormControl("", Validators.required),
      funcionarioId: new FormControl (this.userLogado.getUserId(), Validators.required)
      
    },
    )

  }

  get(field: string) {
    return this.atendimentoForm.get(field);
  }

  async cadastrar() {
    if (!this.atendimentoForm.valid) {
      return;
    }

    try {
      this.loading.exibir();
      await this.atendimentoService.cadastrar(this.atendimentoForm.value);
      this.atendimentoForm.reset();
      this.notificacao.open("Atendimento cadastrado com sucesso", "Ok", {
        duration: 3000
      });
    } catch (error) {
      this.notificacao.open("Falha ao cadastrar com atendimento", "Tentar Novamente", {
        duration: 3000
      });
      console.log(error);
    } finally {
      this.loading.esconder();
    }
  }
}
