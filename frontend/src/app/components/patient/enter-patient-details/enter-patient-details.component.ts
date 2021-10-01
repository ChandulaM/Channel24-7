import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Patient } from 'src/app/models/Patient';
import { PatientSearvicesService } from 'src/app/services/patient-searvices.service';

@Component({
  selector: 'app-enter-patient-details',
  templateUrl: './enter-patient-details.component.html',
  styleUrls: ['./enter-patient-details.component.css']
})
export class EnterPatientDetailsComponent implements OnInit {
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
   labObj: any;
   allObj: Allinfo = {
     test: '',
     hospital: '',
     patientId: 0,
     ref: 0,
     price: 0,
     title: '',
     name: '',
     nic: '',
     phone: '',
     date: '',
     hosFee: 0,
     onlineFee: 0,
     total: 0
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
    this.labObj =  this.localStor.retrieve("lab");
    console.log(this.labObj);
    
    if(this.LoggedInPatient.patientId === undefined){
      this.patientId = null;
    }else{
      this.patientId = this.LoggedInPatient.patientId;
    }

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
      this.allObj.hospital = this.labObj.hospital;
      this.allObj.test = this.labObj.name;
      this.allObj.patientId = this.patientId;
      this.allObj.price = this.labObj.price;
      this.allObj.title = this.form.value.title;
      this.allObj.name = this.form.value.firstName;
      this.allObj.nic = this.form.value.nic;
      this.allObj.phone = this.form.value.phone;
      this.allObj.date = this.currentDate.toUTCString();
      this.allObj.hosFee = 300;
      this.allObj.onlineFee = 0;
      this.allObj.total = this.allObj.price + this.allObj.hosFee + this.allObj.onlineFee;
      this.allObj.ref = Math.floor(Math.random() * ( 91200120 - 11200120  + 1)) + 11200120;
    }

    onSubmit(): void {
      this.submitted = true;

      if (this.form.invalid) {
        return;
      }
      console.log(this.form.value.title);
     this.save();
     this.localStor.store('labWithPatient',this.allObj);
     this.router.navigate(['patient/lab-checkout']);   
    }

}
interface Allinfo {
    test : string,
    hospital : string,
    patientId : number,
    ref : number,
    price: number,
    title : string,
    name : string,
    nic:string,
    phone: string,
    date: String,
    hosFee: number,
    onlineFee: number,
    total: number
}

