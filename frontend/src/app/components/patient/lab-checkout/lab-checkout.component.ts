import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { PatientSearvicesService } from 'src/app/services/patient-searvices.service';

@Component({
  selector: 'app-lab-checkout',
  templateUrl: './lab-checkout.component.html',
  styleUrls: ['./lab-checkout.component.css']
})
export class LabCheckoutComponent implements OnInit {

  session : any;
  checkoutInfo : any;
  currentDate = new Date();
  success = false;
  constructor(private patientService: PatientSearvicesService, private sessionSt : SessionStorageService, private localStor : LocalStorageService) { }

  ngOnInit(): void {
    this.session = this.sessionSt.retrieve("logged");
    this.checkoutInfo = this.localStor.retrieve('labWithPatient');
  }

  pay(){
    if(confirm("Please Confirm")){
      this.patientService
      .addLabAppointment(this.checkoutInfo).subscribe((data: any) => {
        console.log(data)
      }, 
        (error: any) => console.log(error));
      this.success = true;
    } 
  }

  payOnline(){
    
  }

}
