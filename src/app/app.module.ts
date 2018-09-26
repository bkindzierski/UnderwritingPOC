
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

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
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    UwquestionsComponent,
    CategoriesComponent

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
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [UnderwritingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
