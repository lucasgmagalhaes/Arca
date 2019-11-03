import { Component, OnInit, NgModule } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@NgModule({})

@Component({
  selector: 'app-cadastro-animal',
  templateUrl: './cadastro-animal.component.html',
  styleUrls: ['./cadastro-animal.component.scss']
})
export class CadastroAnimalComponent implements OnInit {
  animalForm: FormGroup;
  constructor(private animalService: AnimalService) { }

  ngOnInit() {

    this.animalForm = new FormGroup({
      especie: new FormControl("", Validators.required),
      raca: new FormControl("", Validators.required),
      nome: new FormControl("", Validators.required),
      idade: new FormControl(0, Validators.required),
      medicaoidade: new FormControl(false),
      descricao: new FormControl("", Validators.required),
      isdisponivelparaadocao: new FormControl("", Validators.required),
      ismorto: new FormControl("", Validators.required),
    },
    )
    //  }, this.compararStrings("senha", "confirmarSenha"));

  }

  async cadastrar() {
    if (!this.animalForm.valid) {
      // Deve exibir algo na tela para o usuário
      console.log("Formulário inválido");
    }

    await this.animalService.cadastrar(this.animalForm.value);
    console.log("Animal cadastrado com sucesso");
  }
}
