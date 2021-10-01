import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { PatientSearvicesService } from 'src/app/services/patient-searvices.service';

@Component({
  selector: 'app-search-aapointments',
  templateUrl: './search-aapointments.component.html',
  styleUrls: ['./search-aapointments.component.css']
})
export class SearchAapointmentsComponent implements OnInit {
  form: FormGroup|any;
  loginError1= true;
  appointment: any;
  constructor(private patientService : PatientSearvicesService, private router: Router, private fb : FormBuilder, private localStor : LocalStorageService, private sessionSt : SessionStorageService) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        refNo: ['', Validators.required],
      }
    );

  }

  onSubmit(): void {
    this.loginError1 = false;
    this.patientService
    .getAppointment(this.form.value.refNo).subscribe((val: any) => { 
      this.appointment = this.localStor.store("app", val)
      console.log(val);
      this.router.navigate(['patient/my-appointments']);
    }, 
      (error: any) => this.loginError1 = true ) ;
  }

}
