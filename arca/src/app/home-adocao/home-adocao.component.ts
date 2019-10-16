import { Component, OnInit } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';


@Component({
  selector: 'app-home-adocao',
  templateUrl: './home-adocao.component.html',
  styleUrls: ['./home-adocao.component.scss']
})
export class HomeAdocaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    MaterialDesignModule
  }

}
