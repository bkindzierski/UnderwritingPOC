import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UnderwritingService } from './underwriting.service';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    BrowserAnimationsModule

  ],
  providers: [UnderwritingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
