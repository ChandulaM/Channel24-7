import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { Patient } from 'src/app/models/Patient';
import { PatientSearvicesService } from 'src/app/services/patient-searvices.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  
  form: FormGroup|any;
  message: string = '';
  session: any;
   patient : Patient = new Patient();
   submitted = false;

  constructor(private patientService : PatientSearvicesService, private router: Router, private fb : FormBuilder,  private sessionSt : SessionStorageService) { 

  }

  // newPatient(): void{
  //   this.submitted =false;
  //   this.patient = new Patient();
  // }

  // save() {
  //   this.patientService
  //   .registerPatient(this.form.value).subscribe((data: any) => {
  //     console.log(data)
  //     this.patient = new Patient();
  //   }, 
  //     (error: any) => console.log(error));
  // }

  ngOnInit(){

    this.session = this.sessionSt.retrieve("logged");
    this.form = this.fb.group(
      {
        member: ['', Validators.required],
        title: ['', Validators.required],
        fullName: ['',[Validators.required,Validators.maxLength(80)]],
        currentArea: [
          '',
          [
            Validators.required,
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        nic: ['',[Validators.required,  Validators.minLength(10), Validators.maxLength(12)] ],
        phone: ['',[Validators.required,  Validators.minLength(10), Validators.maxLength(13),  Validators.pattern('^((\\+94-?)|0)?[0-9]{9}$')] ],
       
        acceptTerms: [false, Validators.requiredTrue]
      },
    );

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

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
