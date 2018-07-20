import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { UnderwritingService, Underwriting } from './underwriting.service';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UnderwritingFormGroup: FormGroup;
  // formBuilder: FormBuilder;
  jsonData: Underwriting[];
 
  loaded: boolean = false;
  status: any;
 
  constructor(
    public underwritingService: UnderwritingService,
    public formBuilder: FormBuilder
  ) {

    this.UnderwritingFormGroup = this.formBuilder.group({});

    let s = this.underwritingService.getUnderwritingQuestions()
    .subscribe(data => {
      this.jsonData = data;
      console.log(data);  
      this.loaded = true;
    });
  }

  showData() {
    console.log(this.UnderwritingFormGroup);
    this.status = this.UnderwritingFormGroup.status;
  }

  ngOnInit() {
    console.log("ngoninit");
    this.UnderwritingFormGroup.valueChanges.debounceTime(100).subscribe(data => {
      console.log(data);
      
    });
  }
}
