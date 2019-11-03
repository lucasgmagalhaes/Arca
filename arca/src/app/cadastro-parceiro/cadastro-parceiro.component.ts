import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParceiroService } from '../services/parceiro.service';
import { LoadingService } from '../services/loading.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cadastro-parceiro',
  templateUrl: './cadastro-parceiro.component.html',
  styleUrls: ['./cadastro-parceiro.component.scss']
})
export class CadastroParceiroComponent implements OnInit {

  formCadastro: FormGroup;
  constructor(private parceiroService: ParceiroService, private loading: LoadingService, private notificacao: MatSnackBar) { }

  ngOnInit() {
    this.formCadastro = new FormGroup({
      cnpj: new FormControl("", Validators.required),
      nome: new FormControl("", Validators.required),
      ramo: new FormControl("veterinaria", Validators.required)
    });
  }

  async cadastrar() {
    if (!this.formCadastro.valid) {
      return;
    }

    try {
      this.loading.exibir();
      await this.parceiroService.cadastrar(this.formCadastro.value);
      this.formCadastro.reset();
      this.notificacao.open("Parceiro cadastrado com sucesso", "Ok", {
        duration: 3000
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.loading.esconder();
    }
  }
}
