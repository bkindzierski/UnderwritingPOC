import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http,HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormArray, AbstractControl } from '@angular/forms/src/model';

import { UnderWritingQARoot } from '../app/classes/UnderWritingQARoot'

@Injectable()
export class UnderwritingService {
    
    url: string = "./assets/UWQuestions.json";

    constructor(private http: Http) { }
   

    getUWQuestions() {
        return this.http.get(this.url)
            .map(res => <UnderWritingQARoot>res.json());
    }

}
=======
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
>>>>>>> 7de569ddcbcadb7279940fb7f73a844bb96f78f4
