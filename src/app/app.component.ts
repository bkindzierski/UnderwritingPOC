import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
<<<<<<< HEAD
import { UnderwritingService } from './underwriting.service';

import 'rxjs/add/operator/debounceTime';
import { UnderWritingQARoot } from './classes/UnderWritingQARoot';
=======
import { UnderwritingService, Underwriting } from './underwriting.service';

import 'rxjs/add/operator/debounceTime';
>>>>>>> 7de569ddcbcadb7279940fb7f73a844bb96f78f4

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  
  UnderwritingFormGroup: FormGroup;
  // formBuilder: FormBuilder;
  
  loaded: boolean = false;
  status: any;

  //
  qaData: UnderWritingQARoot;
=======
  UnderwritingFormGroup: FormGroup;
  // formBuilder: FormBuilder;
  jsonData: Underwriting[];
 
  loaded: boolean = false;
  status: any;
>>>>>>> 7de569ddcbcadb7279940fb7f73a844bb96f78f4
 
  constructor(
    public underwritingService: UnderwritingService,
    public formBuilder: FormBuilder
  ) {

    this.UnderwritingFormGroup = this.formBuilder.group({});

<<<<<<< HEAD
    // BDK
    this.underwritingService.getUWQuestions()
    .finally(()=>this.QAcheckData())
    .subscribe(data => {
      this.qaData = data;
    });

  }

  // BDK
  QAcheckData(){
    this.loaded =true;
    
    //console.log('qaData: ' + JSON.stringify(this.qaData));
    
    // this.qaData.UWQUESTIONS.forEach(question => {
    //   console.log('CATEGORY: ' + question.CATEGORY);
    //   question.QUESTIONS.forEach(q=>{
    //     console.log('id: ' + q.ID + ' - question: ' + q.QUESTION);
    //   })
    // });

=======
    let s = this.underwritingService.getUnderwritingQuestions()
    .subscribe(data => {
      this.jsonData = data;
      console.log(data);  
      this.loaded = true;
    });
>>>>>>> 7de569ddcbcadb7279940fb7f73a844bb96f78f4
  }

  showData() {
    console.log(this.UnderwritingFormGroup);
    this.status = this.UnderwritingFormGroup.status;
  }

  ngOnInit() {
    console.log("ngoninit");
    // this.UnderwritingFormGroup.valueChanges.debounceTime(100).subscribe(data => {
    //   console.log(data);
    // });
  }
}
