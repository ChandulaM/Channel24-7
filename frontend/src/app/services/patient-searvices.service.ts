import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientSearvicesService {

  private apiUrl : string = "http://localhost:8081/api/patients"

  constructor(private http : HttpClient) { }

  registerPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/add`, patient);
  }

  addAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_appointment`, appointment);
  }

  addLabAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_lab_appointment`, appointment);
  }

  getAppointment(ref:String): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/get_appointment/${ref}`);
  }

  getPatientById(id : any): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/find/${id}`);
  }

  update(data: Patient): Observable<Patient> {
    return this.http.put(`${this.apiUrl}/update`, data);
  }

  login(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/login`, patient);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  

}
