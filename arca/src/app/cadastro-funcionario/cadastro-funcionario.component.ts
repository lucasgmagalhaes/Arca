import { Component, OnInit, NgModule } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../format-datepicker/format-datepicker.component';

@NgModule({})

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class CadastroFuncionarioComponent implements OnInit {
  funcionarioForm: FormGroup;
  constructor(private funcionarioService: FuncionarioService) { }


  ngOnInit() {

    this.funcionarioForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
      setor: new FormControl(+'', Validators.required),
      salario: new FormControl('', Validators.required),
      isAdministrador: new FormControl((false), Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      confirmarSenha: new FormControl('', Validators.required),
    }, this.compararStrings("senha", "confirmarSenha"));

  }


  async cadastrar() {
    if (!this.funcionarioForm.valid) {
      // Deve exibir algo na tela para o usuário
      console.log("Formulário inválido");
    }


    // this.funcionarioForm.value converte os valores do formGroup para um objeto
    // as propriedades desse objeto são ajustadas para uma interface do tipo "Funcionario"
    // (para isso o nome das propriedades tanto do formGroup como ta interface precisam ser iguais).
    // Como a interface "Funcionario" não possui a propriedade "confirmarSenha" ela não será enviada
    // para a api

    /**
     * **Método não testado. Verifique se as propriedades estão sendo passadas da forma esperada**
     * **Remova esse comentário após a verificação**
     */
    this.funcionarioForm.value.cpf = this.funcionarioForm.value.cpf.replace('.', '');
    this.funcionarioForm.value.cpf = this.funcionarioForm.value.cpf.replace('-', '');
    this.funcionarioForm.value.setor = +this.funcionarioForm.value.setor;

    await this.funcionarioService.cadastrar(this.funcionarioForm.value);
    console.log("Funcionário cadastrado com sucesso");
  }

  /**
   * Validador para as senhas. Verifica se ambos os valores são iguais
   * (Caso exista outros formulários com validação de senha, use esse mesmo método.
   * **Mas retire ele daqui e coloque em um lugar global**)
   */
  compararStrings(control1: string, control2: string): ValidationErrors {
    if (control1 !== control2) {
      return {
        stringsDiferentes: true
      };
    }
    return null;
  }
  deletar(id) {

    this.funcionarioService.deletar(id);
  }
}


