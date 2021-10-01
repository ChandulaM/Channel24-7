import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit {
  session : any;
  appointments: any;
  constructor( private sessionSt : SessionStorageService, private localStor : LocalStorageService,) { }

  ngOnInit(): void {
    this.session = this.sessionSt.retrieve("logged");
    this.appointments = this.localStor.retrieve("app");
  }

  deleteAppointment(id :any) : any {

  }

}
