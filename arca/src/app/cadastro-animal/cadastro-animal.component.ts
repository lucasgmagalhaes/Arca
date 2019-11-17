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
      idade: new FormControl(+"", Validators.required),
      medicaoidade: new FormControl(+"", Validators.required),
      descricao: new FormControl("", Validators.required),
      isdisponivelparaadocao: new FormControl(false, Validators.required),
      ismorto: new FormControl(false, Validators.required),
    },
    )
    //  }, this.compararStrings("senha", "confirmarSenha"));

  }

  get(field: string) {
    return this.animalForm.get(field);
  }
  
  async cadastrar() {

    if (!this.animalForm.valid) {
      alert("formulário inválido");
      // Deve exibir algo na tela para o usuário
      console.log("Formulário inválido");
    }

    await this.animalService.cadastrar(this.animalForm.value);
    alert("Animal cadastrado com sucesso");
    console.log("Animal cadastrado com sucesso");
  }
}
