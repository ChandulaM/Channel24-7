import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/Patient';
import { PatientSearvicesService } from 'src/app/services/patient-searvices.service';
import Validation from './confirmed.validator';

@Component({
  selector: 'app-top-nav-logged',
  templateUrl: './top-nav-logged.component.html',
  styleUrls: ['./top-nav-logged.component.css']
})
export class TopNavLoggedComponent implements OnInit {
  exform: FormGroup|any;
  form: FormGroup|any;
  signUpForm : FormGroup|any;
  message: string = '';
  loginErro: string = '';

   patient : Patient = new Patient();
   LoggedInPatient : Patient = new Patient();
   submitted = false;
   loggedIn = false;

  constructor(private patientService : PatientSearvicesService, private router: Router, private fb : FormBuilder) { 

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

  login(){
    setTimeout(()=>{
    this.loggedIn = true;
    
    this.router.navigate(['patient/home']);   
    },1500);
  }

  logOut(){
    setTimeout(()=>{
    this.loggedIn = false;
   
    this.router.navigate(['patient/home']); 
    },1500);
  }

  // login() {
  //   this.patientService
  //   .login("asd@gmail.com","123123").subscribe((data: any) => {
  //     console.log(data)
  //     this.LoggedInPatient = data;
  //     this.router.navigate(['patient/home',this.LoggedInPatient]);
  //   }, 
  //     (error: any) => console.log(error));
  // }

  ngOnInit(){

    this.exform = new FormGroup({
      logEmail : new FormControl(null, [Validators.required, Validators.email]),
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
