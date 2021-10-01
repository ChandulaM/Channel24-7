import { Component, OnInit } from '@angular/core';
import { DoctorAppointment } from 'src/app/models/DoctorAppointment';
import { AppointmentServiceService } from 'src/app/services/appointment-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  public appointmets: Array<DoctorAppointment> = [];

  statuses: any = ['new', 'completed', 'spam']

  constructor(private service: AppointmentServiceService, private router: Router) { }

  ngOnInit(): void {

    this.service.getAllAppointments().subscribe(res => {
      this.appointmets = res.results
      console.log(this.appointmets)
    })

  }

  viewAppointmentPage(appointment: any) {
    localStorage.setItem('doc_appointment', JSON.stringify(appointment))
    this.router.navigate(['/hospitalmanager/appointments/'+appointment.appointment_id])
  }

  deleteAppointment(appointment: any) {

    if(confirm("Are sure to delete?")) {
      this.service.deleteAppointment(appointment.appointment_id).subscribe(res => {
        console.log(res.results)
        this.appointmets = this.appointmets.filter((item) => {
          return item.appointment_id!==res.results.appointment_id
        })
      })
    }else {
      return;
    }

    
  }

}
