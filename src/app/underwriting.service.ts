import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { FormArray, AbstractControl } from '@angular/forms/src/model';

@Injectable()
export class UnderwritingService {

    url: string = "./assets/underwriting.field.json";
    constructor(private http: Http) { }

    getUnderwritingQuestions() {
        return this.http.get(this.url)
            .map(res => <Underwriting[]>res.json());
    }
}

export interface Underwriting {
    question;
    type;
    field;
    required;
    value;
}