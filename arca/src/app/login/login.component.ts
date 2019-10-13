import { Component, OnInit } from '@angular/core';

import {NgModule} from '@angular/core';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



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

// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class LoginComponent implements OnInit {
  
  protected aFormGroup: FormGroup;
 
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
}