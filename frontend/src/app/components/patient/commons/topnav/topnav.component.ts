import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Patient } from 'src/app/models/Patient';
import { PatientSearvicesService } from 'src/app/services/patient-searvices.service';
import Validation from './confirmed.validator';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  exform: FormGroup|any;
  form: FormGroup|any;
  signUpForm : FormGroup|any;
  message: string = '';
  loginErro: string = '';
  session : any;


   patient : Patient = new Patient();
   LoggedInPatient : Patient = new Patient();
   submitted = false;
   loggedIn = false;
   loginError1 = false;
   
  //  localStor : LocalStorageService|any;
  //  sessionSt : SessionStorageService|any;
   

  constructor(private patientService : PatientSearvicesService, private router: Router, private fb : FormBuilder, private localStor : LocalStorageService, private sessionSt : SessionStorageService) { 
    
  }

  
  newPatient(): void{
    this.submitted =false;
    this.patient = new Patient();
  }

  save() {
    this.patientService
    .registerPatient(this.form.value).subscribe((data: any) => {
      console.log(data)
      this.patient = new Patient();
    }, 
      (error: any) => console.log(error));
  }


  logOut(){
    setTimeout(()=>{
    this.loggedIn = false;
    this.sessionSt.clear("logged");
    this.session = this.sessionSt.clear("logged");
    this.router.navigate(['patient/home']); 
    },1500);
  }

  login() {
     this.loginError1 = false;
    this.patientService
    .login(this.exform.value).subscribe((val: any) => {
      console.log(val);
      this.sessionSt.store("logged", val);
      this.session = this.sessionSt.store("logged", val);
      
      //this.router.navigate(['patient/my'], {"state": val});
      this.router.navigate(['patient/home']);
    }, 
      (error: any) => this.loginError1 = true ) ;
  }


  ngOnInit(){
   
   const isLogged = this.sessionSt.retrieve("logged");

   if(isLogged){ 
      this.session = isLogged; 
   }

    this.exform = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      password :new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

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
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );

  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.save();
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  

  loginSubmit(){
    this.submitted = true;
    console.log("login called");
    if (this.exform.invalid) {
      return;
    }
    this.login();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

