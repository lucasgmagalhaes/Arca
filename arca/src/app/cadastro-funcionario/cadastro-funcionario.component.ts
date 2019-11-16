import { Component, OnInit, NgModule, ViewChild } from "@angular/core";
import { FuncionarioService } from "../services/funcionario.service";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  FormGroupDirective
} from "@angular/forms";
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import {
  AppDateAdapter,
  APP_DATE_FORMATS
} from "../format-datepicker/format-datepicker.component";
import { LoadingService } from "../services/loading.service";
import { MatSnackBar } from "@angular/material";

@NgModule({})
@Component({
  selector: "app-cadastro-funcionario",
  templateUrl: "./cadastro-funcionario.component.html",
  styleUrls: ["./cadastro-funcionario.component.scss"],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class CadastroFuncionarioComponent implements OnInit {
  funcionarioForm: FormGroup;
  @ViewChild(FormGroupDirective, { static: false }) _form: FormGroupDirective;

  constructor(
    private funcionarioService: FuncionarioService,
    private loading: LoadingService,
    private notificacao: MatSnackBar
  ) {}

  ngOnInit() {
    this.funcionarioForm = new FormGroup(
      {
        nome: new FormControl("", Validators.required),
        dataNascimento: new FormControl("", Validators.required),
        setor: new FormControl(+"", Validators.required),
        salario: new FormControl("", Validators.required),
        isAdministrador: new FormControl(false, Validators.required),
        cpf: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        senha: new FormControl("", Validators.required),
        confirmarSenha: new FormControl("", Validators.required)
      },
      this.compararStrings("senha", "confirmarSenha")
    );
  }
  async cadastrar() {
    if (!this.funcionarioForm.valid) {
      console.log("Formulário inválido");
    }

    this.funcionarioForm.value.cpf = this.funcionarioForm.value.cpf.replace(
      ".",
      ""
    );
    this.funcionarioForm.value.cpf = this.funcionarioForm.value.cpf.replace(
      "-",
      ""
    );
    this.funcionarioForm.value.setor = +this.funcionarioForm.value.setor;

    try {
      this.loading.exibir();
      await this.funcionarioService.cadastrar(this.funcionarioForm.value);
      this.funcionarioForm.reset();
      this._form.resetForm();
      this.notificacao.open("Funcionário cadastrado com sucesso", "Ok", {
        duration: 3000
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.loading.esconder();
    }
  }

  compararStrings(control1: string, control2: string): ValidationErrors {
    if (control1 !== control2) {
      return {
        stringsDiferentes: true
      };
    }
    return null;
  }
}
