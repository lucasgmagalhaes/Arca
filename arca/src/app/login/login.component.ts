import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { MaterialDesignModule } from "../material-design/material-design.module";
import { FormGroup, Validators, FormControl, AbstractControl } from "@angular/forms";
import { AssociadoService } from "../services/associado.service";
import { LoadingService } from "../services/loading.service";
import { SessionService } from "../services/session.service";
import { MatSnackBar } from "@angular/material";
import { FuncionarioService } from "../services/funcionario.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
@NgModule({
  exports: [MaterialDesignModule]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authValid: boolean;
  constructor(
    private associadoService: AssociadoService,
    private funcionarioService: FuncionarioService,
    private loading: LoadingService,
    private sessionService: SessionService,
    private notificacao: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      cpf: new FormControl("", Validators.required),
      senha: new FormControl("", Validators.required)
    });
  }

  get(control: string) {
    return this.loginForm.get(control);
  }

  resolved() {
    this.authValid = true;
  }

  async login() {
    if (this.isDadosValidos()) {
      this.loading.exibir();
      try {
        await this.tentarLogar();
        this.router.navigate([""]);
      } catch {
        this.notificacao.open("Usuário ou senha inválidos", "Ok", {
          duration: 5000
        });
      }

      this.loading.esconder();
    }
  }

  isDadosValidos() {
    return this.loginForm.valid && this.authValid;
  }

  private async tentarLogar() {
    try {
      await this.fazerLoginAssociado();
    } catch (error) {
      await this.fazerLoginFuncionario();
    }
  }

  private async fazerLoginAssociado() {
    const associado = await this.associadoService.login(this.loginForm.value);
    this.sessionService.login(associado.id.toString(), "associado");
  }

  private async fazerLoginFuncionario() {
    const funcionario = await this.funcionarioService.login(
      this.loginForm.value
    );
    this.sessionService.login(funcionario.id.toString(), "funcionario");
  }
}
