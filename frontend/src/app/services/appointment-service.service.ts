import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorAppointmentResults, SingleDoctorAppointmentResult } from '../models/DoctorAppointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  private API: string = "http://localhost:8081/api/doctor_appointments"

  constructor(private http: HttpClient) { }

  public getAllAppointments(): Observable<DoctorAppointmentResults> {
    return this.http.get<DoctorAppointmentResults>(this.API+'/all')
  }

  public getAppointmentById(id: number): Observable<SingleDoctorAppointmentResult> {
    return this.http.get<SingleDoctorAppointmentResult>(this.API+'/'+id)
  }

  public deleteAppointment(id: number): Observable<SingleDoctorAppointmentResult> {
    return this.http.delete<SingleDoctorAppointmentResult>(this.API+'/delete/'+id)
  }

}
