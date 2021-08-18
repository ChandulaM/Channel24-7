import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  exform: FormGroup|any;
  signUpForm : FormGroup|any;
  message: string = '';

  constructor() { 
  }

 

  ngOnInit(){

    this.exform = new FormGroup({
      logEmail : new FormControl(null, [Validators.required, Validators.email]),
      password :new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.signUpForm = new FormGroup({
      title :new FormControl('Title',Validators.required),
      firstName :new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      lastName :new FormControl(null,  [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      signUpEmail :new FormControl(null, [Validators.required,  Validators.email]),
      nic :new FormControl(null, [Validators.required,  Validators.minLength(12)]),
      dob :new FormControl(null, Validators.required),
      mobile :new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12),  Validators.pattern('^((\\+94-?)|0)?[0-9]{9}$')]),
      signUpPassword :new FormControl(null, [Validators.required, Validators.minLength(6)]),
      conSignUpPassword :new FormControl(null, Validators.required),
    });

  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.message = 'The form is VALID';
    }
    if (f.invalid){
      this.message = 'The form is INVALID';
    }
   }

}
