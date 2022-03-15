import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  constructor() { }
  emailid: any;
  formdata: any;
  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl('', this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol:any) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
    return null;
  }
  onClickSubmit(data: any) { this.emailid = data.emailid; }
}
