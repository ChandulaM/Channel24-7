import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
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
  updateStat = false;
  id: number = 3;
  loggedPatient : any;

   patient : Patient = new Patient();
   submitted = false;
   submitted2 = false;

   @Input()
  pat: Patient = new Patient;

  @Input() firstName: string | undefined;
  

  constructor(private patientService : PatientSearvicesService, private router: Router, private fb : FormBuilder, private route : ActivatedRoute, private localStor : LocalStorageService, private sessionSt : SessionStorageService) { 

  }

  ngOnInit(): void {

    this.loggedPatient = this.sessionSt.retrieve("logged");
    this.firstName = this.loggedPatient.firstName;
    
    this.id = this.loggedPatient.patientId;

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

      this.patientService.getPatientById(this.id).subscribe((data:any)=>{
        this.patient = data;
        this.pat = data;
        console.log(data);
      },error => console.log(error));

     

     setTimeout(()=>{
       this.form.setValue({
         title: this.patient.title,
         firstName: this.patient.firstName,
         lastName: this.patient.lastName,
         email: this.patient.email,
         nic: this.patient.nic,
         phone: this.patient.phone,
         dob:this.patient.dob,
      });
     },500);
  }


  get f2(): { [key: string]: AbstractControl } {
    return this.formResetPassword.controls;
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  


  onSubmit(): void {
    this.submitted = true;
    this.patientService.update(this.patient).subscribe(data =>{
      this.updateStat = true;
      console.log(data,"aaa");
    },error => console.log(error))

    if (this.form.invalid) {
      return;
    }
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
