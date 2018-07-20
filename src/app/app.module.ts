import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UnderwritingService } from './underwriting.service';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';

import { FormBuilderComponent } from './formbuilder/formbuilder';
@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule
  ],
  providers: [UnderwritingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
