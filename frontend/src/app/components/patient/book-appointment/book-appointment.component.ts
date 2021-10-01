import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  datevalue: any;
  shedules : any;
  session : any;
  name : any;
  selectedDoc: any;
  appointment : Appointment = {
    docName: '',
    specialization: '',
    hospital: '',
    date: '',
    time: '',
    ap: 0,
    pay:0,
  }
  selectedTime: any;

  constructor(private router: Router, private sessionSt : SessionStorageService ,private localStor : LocalStorageService) { }
  
  callPd(id:any){
    setTimeout(()=>{
      this.selectedTime = this.shedules.find((x:any) => x.id === id);
      this.appointment.docName = this.selectedDoc.name;
      this.appointment.specialization = this.selectedDoc.specialization;
      this.appointment.hospital = this.selectedDoc.hospital;
      this.appointment.pay = this.selectedDoc.pay;
      this.appointment.date = this.selectedTime.date;
      this.appointment.time = this.selectedTime.time;
      this.appointment.ap = this.selectedTime.ap + 1;
      console.log(this.appointment);
      this.localStor.store("appointment", this.appointment);
      this.router.navigate(['patient/enter-details-for-appointment']);   
      },1000);
  }
  save(){
    this.appointment.docName = this.selectedDoc.name;
    this.appointment.specialization = this.selectedDoc.specialization;
    this.appointment.hospital = this.selectedDoc.hospital;
    this.appointment.docName = this.selectedDoc.name;
    this.appointment.docName = this.selectedDoc.name;
  }


  ngOnInit(): void {
    this.session = this.sessionSt.retrieve("logged");
    this.selectedDoc = this.localStor.retrieve("doc");
    this.shedules = [
      { id: 0, date : "2021-08-22", time: "05:30PM", ap:23 },
      { id: 1, date: "2021-08-23", time: "06:30AM", ap:12 },
      { id: 2, date: "2021-08-23", time: "02:30PM", ap:11},
      { id: 3, date: "2021-08-24", time: "03:30PM", ap:10},
      { id: 4, date: "2021-08-25", time: "06:30PM", ap:4 },
      { id: 5, date: "2021-08-26", time: "07:30AM", ap:4 },
      { id: 6, date: "2021-08-29", time: "03:30PM", ap:3},
    ];
  }

  


  searchDate(){
    if(this.datevalue == ''){
      return this.ngOnInit();
    }else{
      this.shedules = this.shedules.filter((shed:any) =>{
        return shed.date.toLocaleLowerCase().match(this.datevalue.toLocaleLowerCase());
      })
    }
  }

}
interface Appointment{
  docName : string,
  specialization : string,
  hospital : string,
  date : string,
  time : string,
  ap : number,
  pay:number,
}
