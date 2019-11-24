import { Associado } from './../models/associado.model';
import { AssociadoService } from './../services/associado.service';
import { Funcionario } from './../models/funcionario.model';
import { SessionService } from './../services/session.service';
import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { FuncionarioService } from '../services/funcionario.service';
import { LoadingService } from '../services/loading.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss']
})
export class AlterarSenhaComponent implements OnInit {
  alterarSenhaForm: FormGroup;
  funcionario: Funcionario;
  associado: Associado;
  teste: string;
  constructor(private funcionarioService: FuncionarioService, private associadoService: AssociadoService, private loading: LoadingService,
    private notificacao: MatSnackBar, private usuarioLogado: SessionService) { }

  ngOnInit() {

    if (this.usuarioLogado.getType() === "admin" || this.usuarioLogado.getType() === "funcionario") {
      this.funcionarioService.listarFuncionario(this.usuarioLogado.getUserId()).subscribe(dados => this.funcionario = dados);
    }
    else if (this.usuarioLogado.getType() === "associado") {
      this.associadoService.listarAssociado(this.usuarioLogado.getUserId()).subscribe(dados => this.associado = dados);
    }

    this.alterarSenhaForm = new FormGroup({
      senha: new FormControl("", Validators.required),
      confSenha: new FormControl("", Validators.required)
    });

  }

  async alterarSenha() {
    this.loading.exibir();

    if (this.senhasIguais(this.alterarSenhaForm.get('senha').value, this.alterarSenhaForm.get('confSenha').value)) {
      try {      
        if (this.usuarioLogado.getType() == "associado") {
          this.associado.senha = this.alterarSenhaForm.get('senha').value;
          await this.associadoService.alterar(this.associado);
          this.alterarSenhaForm.reset();
          this.notificacao.open("Senha do associado alterada com sucesso!", "Ok", {
            duration: 3000
          });
        }
        else if (this.usuarioLogado.getType() == "funcionario" || this.usuarioLogado.getType() == "admin") {
          this.funcionario.senha = this.alterarSenhaForm.get('senha').value;
          await this.funcionarioService.alterar(this.funcionario);
          this.alterarSenhaForm.reset();
          this.notificacao.open("Senha do funcionário alterada com sucesso!", "Ok", {
            duration: 3000
          });
        }
      } catch (error) {
        console.log(error);
        this.notificacao.open("Falha ao alterar senha.", "Ok", {
          duration: 3000
        });
      } finally {
        this.loading.esconder();
      }
    }
    else {
      this.alterarSenhaForm.reset();
      this.notificacao.open("As senhas digitadas não confererem", "Ok", {
        duration: 3000
      });
      this.loading.esconder();
    }
  }

  senhasIguais(control1: string, control2: string) {
    if (control1 == control2) {
      return true;
    }
    else {
      return false;
    }
  }

}
