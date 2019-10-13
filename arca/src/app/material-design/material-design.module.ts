
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
   MatButtonModule,
   MatInputModule,
   MatFormFieldModule,
   MatCardModule
  } from '@angular/material';

  import {NgxMaskModule, IConfig} from 'ngx-mask'
  export const options: Partial<IConfig> | (() => Partial<IConfig>) ={};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgxMaskModule.forRoot(options)
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgxMaskModule,
  ]
})
export class MaterialDesignModule { }