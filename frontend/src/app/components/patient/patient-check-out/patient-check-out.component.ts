import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { PatientSearvicesService } from 'src/app/services/patient-searvices.service';

@Component({
  selector: 'app-patient-check-out',
  templateUrl: './patient-check-out.component.html',
  styleUrls: ['./patient-check-out.component.css']
})
export class PatientCheckOutComponent implements OnInit {
  success = false;
  session : any;
  checkoutInfo : any;
  currentDate = new Date();
  constructor(private patientService : PatientSearvicesService, private sessionSt : SessionStorageService, private localStor : LocalStorageService) { }

  ngOnInit(): void {
    this.session = this.sessionSt.retrieve("logged");
    this.checkoutInfo = this.localStor.retrieve('appWithPatient');
  }

  pay(){
    if(confirm("Please Confirm")){
      this.patientService
      .addAppointment(this.checkoutInfo).subscribe((data: any) => {
        console.log(data)
      }, 
        (error: any) => console.log(error));
      this.success = true;
    }
  }

  payOnline(){
    
  }
}