import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Patient } from 'src/app/models/Patient';
import { PatientSearvicesService } from 'src/app/services/patient-searvices.service';

@Component({
  selector: 'app-patient-details-for-appointment',
  templateUrl: './patient-details-for-appointment.component.html',
  styleUrls: ['./patient-details-for-appointment.component.css']
})
export class PatientDetailsForAppointmentComponent implements OnInit {

  signUpForm : FormGroup|any;
  message: string = '';
  loginErro: string = '';
  session : any;
  form: FormGroup|any;

   patient : Patient = new Patient();
   LoggedInPatient : Patient = new Patient();
   submitted = false;
   loggedIn = false;
   loginError1 = false;
   appObj: any;
   allObj: Allinfo = {
     doc: '',
     hospital: '',
     patientId: 0,
     ref: 0,
     pay: 0,
     title: '',
     name: '',
     nic: '',
     phone: '',
     date: '',
     hosFee: 0,
     onlineFee: 0,
     total: 0,
     spec: '',
     time: '',
     ap: 0,
     bookedDate : '',
   };

   currentDate = new Date();
  loggedPatient: any;
  patientId: any;

  constructor(private patientService : PatientSearvicesService, private router: Router, private fb : FormBuilder, private localStor : LocalStorageService, private sessionSt : SessionStorageService) { }
  
  newPatient(): void{
    this.submitted =false;
    this.patient = new Patient();
  }



  ngOnInit(): void {
    this.loggedPatient = this.sessionSt.retrieve("logged");
   this.appObj =  this.localStor.retrieve("appointment");
    console.log(this.LoggedInPatient,"askjdhasjkdaksjdhajshdjk");
    
    if(this.LoggedInPatient.patientId === undefined){
      this.patientId = null;
    }else{
      this.patientId = this.LoggedInPatient.patientId;
    }


    console.log(this.appObj);
    this.form = this.fb.group(
      {
        title: ['', Validators.required],
        firstName: ['',[Validators.required,Validators.maxLength(20)]],

        nic: ['',[Validators.required,  Validators.minLength(10), Validators.maxLength(12)] ],
        phone: ['',[Validators.required,  Validators.minLength(10), Validators.maxLength(13),  Validators.pattern('^((\\+94-?)|0)?[0-9]{9}$')] ],
      }
    );

  }

    getToday(): string {
        return new Date().toISOString().split('T')[0]
    }
      
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }

    onReset(): void {
      this.submitted = false;
      this.form.reset();
    }

    save(): void{
      this.allObj.hospital = this.appObj.hospital;
      this.allObj.doc = this.appObj.docName;
      this.allObj.pay = this.appObj.pay;
      this.allObj.patientId = this.patientId;
      this.allObj.time = this.appObj.time;
      this.allObj.spec = this.appObj.specialization;
      this.allObj.ap = this.appObj.ap;
      this.allObj.title = this.form.value.title;
      this.allObj.name = this.form.value.firstName;
      this.allObj.nic = this.form.value.nic;
      this.allObj.phone = this.form.value.phone;
      this.allObj.date = this.appObj.date;
      this.allObj.hosFee = 300;
      this.allObj.onlineFee = 0;
      this.allObj.total = this.allObj.pay + this.allObj.hosFee + this.allObj.onlineFee;
      this.allObj.bookedDate = this.currentDate.toUTCString();
      this.allObj.ref =Math.floor(Math.random() * ( 911200120 - 111200120  + 1)) + 111200120;
    }

    onSubmit(): void {
      this.submitted = true;

      if (this.form.invalid) {
        return;
      }

     this.save();
     this.localStor.store('appWithPatient',this.allObj);
     this.router.navigate(['patient/checkout']);   
    }

}
interface Allinfo {
    doc : string,
    spec : string,
    hospital : string,
    patientId: number,
    ref: number,
    pay: number,
    title : string,
    name : string,
    nic:string,
    phone: string,
    date: String,
    time: string,
    hosFee: number,
    onlineFee: number,
    total: number,
    ap: number,
    bookedDate : String
}