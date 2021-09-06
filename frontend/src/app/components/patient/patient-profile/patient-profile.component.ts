import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/Patient';
import { PatientSearvicesService } from 'src/app/services/patient-searvices.service';
import Validation from '../commons/topnav/confirmed.validator';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  formResetPassword: FormGroup|any;
  form: FormGroup|any;
  message: string = '';

   patient : Patient = new Patient();
   submitted = false;
   submitted2 = false;

  constructor(private patientService : PatientSearvicesService, private router: Router, private fb : FormBuilder) { 

  }

  ngOnInit(): void {

    this.formResetPassword = this.fb.group(
      {
        curPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        password: ['',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );


    this.form = this.fb.group(
      {
        title: ['', Validators.required],
        firstName: ['',[Validators.required,Validators.maxLength(20)]],
        lastName: [
          '',
          [
            Validators.required,
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        nic: ['',[Validators.required,  Validators.minLength(10), Validators.maxLength(12)] ],
        phone: ['',[Validators.required,  Validators.minLength(10), Validators.maxLength(13),  Validators.pattern('^((\\+94-?)|0)?[0-9]{9}$')] ],
        dob:['', Validators.required],
      },
    );
  }


  get f2(): { [key: string]: AbstractControl } {
    return this.formResetPassword.controls;
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }



  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    // this.save();
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onSubmitPass(): void {
    this.submitted2 = true;

    if (this.formResetPassword.invalid) {
      return;
    }
    // this.save();
    console.log(JSON.stringify(this.formResetPassword.value, null, 2));
  }


  onReset2(): void {
    this.submitted2 = false;
    this.formResetPassword.reset();
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }


}
