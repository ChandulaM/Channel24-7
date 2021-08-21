import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientSearvicesService {

  private apiUrl : string = "http://localhost:8081/api/patients/"

  constructor(private http : HttpClient) { }

  registerPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/add`, patient);
  }

  getPatientById(id : number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/find/${id}`);
  }
}
