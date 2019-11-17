import { Component, OnInit, NgModule, ViewChild } from "@angular/core";
import { AnimalService } from "../services/animal.service";
import { FormGroup, FormControl, Validators, ValidationErrors, FormGroupDirective } from "@angular/forms";
import { LoadingService } from '../services/loading.service';
import { MatSnackBar } from '@angular/material';

@NgModule({})

@Component({
  selector: "app-cadastro-animal",
  templateUrl: "./cadastro-animal.component.html",
  styleUrls: ["./cadastro-animal.component.scss"]
})
export class CadastroAnimalComponent implements OnInit {
  animalForm: FormGroup;
  @ViewChild(FormGroupDirective, { static: false }) _form: FormGroupDirective;
  constructor(private animalService: AnimalService,
    private loading: LoadingService,
    private notificacao: MatSnackBar) { }

  ngOnInit() {

    this.animalForm = new FormGroup({
      especie: new FormControl("", Validators.required),
      raca: new FormControl("", Validators.required),
      nome: new FormControl("", Validators.required),
      idade: new FormControl(0, Validators.required),
      medicaoidade: new FormControl(0, Validators.required),
      descricao: new FormControl("", Validators.required),
      isdisponivelparaadocao: new FormControl(false, Validators.required),
      ismorto: new FormControl(false, Validators.required),
    },
    );
    //  }, this.compararStrings("senha", "confirmarSenha"));

  }

  get(field: string) {
    return this.animalForm.get(field);
  }

  async cadastrar() {
    this.loading.exibir();
    try {
      await this.animalService.cadastrar(this.animalForm.value);
      this.notificacao.open("Animal cadastrado com sucesso!", "Ok", {
        duration: 3000
      });
      this._form.resetForm();
      this.animalForm.reset();
    } catch (error) {
      console.log(error);
      this.notificacao.open("Não foi possível cadastrar o animal :(", "Ok", { duration: 5000 });
    }

    this.loading.esconder();
  }
}
