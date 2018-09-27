import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { UnderWritingQARoot } from '../classes/UnderWritingQARoot';



@Component({
  selector: 'app-uwquestions',
  templateUrl: './uwquestions.component.html',
  styleUrls: ['./uwquestions.component.css']
})
export class UwquestionsComponent implements OnInit {

  @Input() qaData: UnderWritingQARoot;
  @Input() form: FormGroup;
  
  valid=0;  
  payLoad = '';
  evaluated;
  keepgoing:boolean;

  constructor() { }

  ngOnInit() {
    
    //console log  --> INPUT data
    // this.qaData.UWQUESTIONS.forEach(question => {
    //   //console.log('CATEGORY: ' + question.CATEGORY);
    //   question.QUESTIONS.forEach(q=>{
    //     console.log('id: ' + q.ID + ' - question: ' + q.QUESTION);
    //   })
    // });
    
    //BUILD form groupd
    this.toFormGroup();

    
    //check for changes
    this.form.valueChanges.subscribe(formData => {
           
      formData = this.form.getRawValue();      

      //let formDataKey = Object.keys(formData);      
      //console.log(formDataKey);
      // formDataKey.forEach(k=>{
      //   console.log('k: ' + k);
      // });

       //root level
       this.qaData.UWQUESTIONS.forEach(question => {
     
          //UW category level
           question.QUESTIONS.forEach(q=>{
            q.ANSWER = formData[q.ID];
                         
              //subquestion level
              q.SUBQUESTIONS.forEach(s=>{
                s.ANSWER = formData[s.ID];

                //SELECT TYPE - no logic really needed yet
                // if(q.ELEMENTTYPE == 'SELECT'){
                //   q.ANSWER = formData[q.ID];
                //   s.ANSWER = formData[s.ID];
                //}
 
                //TEXT TYPE
                if(q.ELEMENTTYPE == 'TEXT')
                {
                  if(s.RULE && formData[q.ID])
                  {
                      var post = s.RULE, logic = '<=', value = formData[q.ID];                      
                      this.evaluated = eval(post + logic + value);
                      //
                      (this.evaluated) ? q.FORMSTATUS = true : q.FORMSTATUS = false;
                  }
                  //handles back spacing to blank
                  else{
                    q.FORMSTATUS = false;
                  }                    
                }

            });//end subquestion foreach              
          }); //end question foreach
       });//end root foreach      

    });//end subscribe
  }//end ngOnInit

  //BUILD THE FORM HERE
  toFormGroup() {
    // setup the form
    const formGroup = {};

    //root level
    this.qaData.UWQUESTIONS.forEach(question => {
      
      //UW category level
      question.QUESTIONS.forEach(q=>{        
        let validation = (q.REQUIRED =='Y')? Validators.required:Validators.nullValidator;
        // formGroup[q.ID] = new FormControl(q.ANSWER || ''), this.mapValidators(q.REQUIRED);
        formGroup[q.ID] = new FormControl(q.ANSWER || '', validation);

          //sub question level    
          q.SUBQUESTIONS.forEach(s=>{        
            let subvalidation = (s.REQUIRED =='Y')? Validators.required:Validators.nullValidator;            
            //formGroup[s.ID] = new FormControl(s.ANSWER || ''), this.mapValidators(s.REQUIRED);
            formGroup[s.ID] = new FormControl(s.ANSWER || '', subvalidation);
          });
      });
    }); 

    this.form = new FormGroup(formGroup);
  }
 
  //
  private mapValidators(validators) {
    const formValidators = [];
  
    if(validators) {
      for(const validation of Object.keys(validators)) {
        if(validation === 'Y') {
          formValidators.push(Validators.required);
        } else if(validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }
  
    return formValidators;
  }

  onSubmit() {
    //this.payLoad = JSON.stringify(this.form.value);
    this.payLoad = JSON.stringify(this.qaData);
    console.log('form control validation: ' + this.form.controls[1].valid);
    console.log('status: ' + this.form.status);
    console.log('dirty: ' + this.form.dirty);
    console.log('touched: ' + this.form.touched);
    
  }

}
