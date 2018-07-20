import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
	selector: 'mig-formbuilder',
	templateUrl: './formbuilder.html',
})
export class FormBuilderComponent {
	@Input() jsonData: any[];
	@Input() form: FormGroup;
	constructor(
	) { }

	createForm() {
		for (let i = 0; i < this.jsonData.length; i++) {
			// add the control
			let d = this.jsonData[i];
			this.form.addControl(d.field, new FormControl(d.value));

			// add the validator
			// console.log(d.required);
			if (d.required == "true") {
				let f = this.form.get(d.field);
				f.setValidators(Validators.required);
			}

			// subquestion
			if (d.subquestion) {
				for (let s = 0; s < this.jsonData[i].subquestion.length; s++) {
					let ds = this.jsonData[i].subquestion[s]
					this.form.addControl(ds.field, new FormControl(ds.value));
				}
			}

		}
		this.form.valueChanges.subscribe(formData => {
			formData = this.form.getRawValue();
			console.log(formData);
			let formDataKey = Object.keys(formData);


			for (let i = 0; i < this.jsonData.length; i++) {
				for (let oo = 0; oo < formDataKey.length; oo++) {
					if (this.jsonData[i].field == formDataKey[oo]) { this.jsonData[i].value = formData[formDataKey[oo]]; }
				}

				if (this.jsonData[i].subquestion && this.jsonData[i].subquestion.length) {
					for (let s = 0; s < this.jsonData[i].subquestion.length; s++) {
						for (let oo = 0; oo < formDataKey.length; oo++) {
							if (this.jsonData[i].subquestion[s].field == formDataKey[oo]) { this.jsonData[i].subquestion[s].value = formData[formDataKey[oo]]; }
						}
					}
				}
			}
		});
	}

	ngOnInit() {
		this.createForm();
	}
}
