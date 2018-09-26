import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { UnderwritingService } from './underwriting.service';
=======
import {UnderwritingService } from './underwriting.service';
>>>>>>> 7de569ddcbcadb7279940fb7f73a844bb96f78f4

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

<<<<<<< HEAD
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormBuilderComponent } from './formbuilder/formbuilder';
import { UwquestionsComponent } from './UWFormQuestions/uwquestions.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    UwquestionsComponent
=======
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';

import { FormBuilderComponent } from './formbuilder/formbuilder';
@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent
>>>>>>> 7de569ddcbcadb7279940fb7f73a844bb96f78f4
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
<<<<<<< HEAD
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    BrowserAnimationsModule
=======
    RadioButtonModule
>>>>>>> 7de569ddcbcadb7279940fb7f73a844bb96f78f4
  ],
  providers: [UnderwritingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
