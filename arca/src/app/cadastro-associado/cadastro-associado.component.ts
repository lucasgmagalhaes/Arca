import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssociadoService } from '../services/associado.service';
import { SessionService } from '../services/session.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-associado',
  templateUrl: './cadastro-associado.component.html',
  styleUrls: ['./cadastro-associado.component.scss']
})

@NgModule({
  exports: [
    MaterialDesignModule
  ]
})

export class CadastroAssociadoComponent implements OnInit {

  associadoForm: FormGroup;
  constructor(private associadoService: AssociadoService,
    private sessionService: SessionService,
    private loading: LoadingService,
    private router: Router) { }

  ngOnInit() {
    this.associadoForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      dataNascimento: new FormControl("", Validators.required),
      cpf: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      senha: new FormControl("", Validators.required),
      confirmarSenha: new FormControl("", Validators.required)
    });
  }

  get(control: string) {
    return this.associadoForm.get(control);
  }

  async cadastrar() {
    if (!this.associadoForm.valid) {
      return;
    }

    try {
      this.loading.exibir();
      const associado = await this.associadoService.cadastrar(this.associadoForm.value);
      this.sessionService.login(associado.id.toString(), "associado");
      this.router.navigate([""]);
    } catch (error) {
      console.log(error);     
    }
    this.loading.esconder();
  }
}
