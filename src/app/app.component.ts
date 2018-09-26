import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { UnderwritingService } from './underwriting.service';

import 'rxjs/add/operator/debounceTime';
import { UnderWritingQARoot } from './classes/UnderWritingQARoot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  UnderwritingFormGroup: FormGroup;
  // formBuilder: FormBuilder;
  
  loaded: boolean = false;
  status: any;

  //
  qaData: UnderWritingQARoot;
 
  constructor(
    public underwritingService: UnderwritingService,
    public formBuilder: FormBuilder
  ) {

    this.UnderwritingFormGroup = this.formBuilder.group({});

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
