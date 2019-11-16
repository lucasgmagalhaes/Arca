import { Component, OnInit } from "@angular/core";
import {NgModule} from "@angular/core";
import { MaterialDesignModule } from "../material-design/material-design.module";

@Component({
  selector: "app-cadastro-associado",
  templateUrl: "./cadastro-associado.component.html",
  styleUrls: ["./cadastro-associado.component.scss"]
})

@NgModule({
  exports: [
    MaterialDesignModule
  ]
})

export class CadastroAssociadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
