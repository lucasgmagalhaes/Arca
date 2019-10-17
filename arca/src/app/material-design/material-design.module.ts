
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextFieldModule } from '@angular/cdk/text-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatDatepickerModule} from '@angular/material/datepicker';


import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatTableModule,
  MatToolbarModule,

} from '@angular/material';

import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgxMaskModule.forRoot(options),
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    TextFieldModule,
    MatTableModule,
    MatToolbarModule,
    // MatDatepickerModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgxMaskModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    TextFieldModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class MaterialDesignModule { }
export class AppModule {}
