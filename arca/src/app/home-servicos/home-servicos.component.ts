import { Component, OnInit } from "@angular/core";
import { MaterialDesignModule } from "../material-design/material-design.module";

@Component({
  selector: "app-home-servicos",
  templateUrl: "./home-servicos.component.html",
  styleUrls: ["./home-servicos.component.scss"]
})
export class HomeServicosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    MaterialDesignModule;
  }

}
