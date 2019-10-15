import { Component, OnInit } from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    MaterialDesignModule
  }

}
