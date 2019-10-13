import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@NgModule({
  exports: [
    MaterialDesignModule
  ]
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
