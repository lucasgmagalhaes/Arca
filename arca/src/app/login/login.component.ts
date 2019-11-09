import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AssociadoService } from '../services/associado.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@NgModule({
  exports: [
    MaterialDesignModule
  ]
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  authValid: boolean;
  constructor(private associadoService: AssociadoService, private loading: LoadingService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      cpf: new FormControl("", Validators.required),
      senha: new FormControl("", Validators.required)
    });
  }

  resolved() {
    this.authValid = true;
  }

  async login() {
    if (this.isDadosValidos()) {
      this.loading.exibir();
      const associado = await this.associadoService.login(this.loginForm.value);
      localStorage.setItem("USERID", associado.id.toString());
      console.log(associado);
      this.loading.esconder();
    }
  }

  private isDadosValidos() {
    return this.loginForm.valid && this.authValid;
  }
}
