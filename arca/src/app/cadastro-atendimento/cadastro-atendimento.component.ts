import { Component, OnInit } from "@angular/core";
import { MaterialDesignModule } from "../material-design/material-design.module";

@Component({
  selector: "app-cadastro-atendimento",
  templateUrl: "./cadastro-atendimento.component.html",
  styleUrls: ["./cadastro-atendimento.component.scss"]
})
export class CadastroAtendimentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    MaterialDesignModule;
  }

}
