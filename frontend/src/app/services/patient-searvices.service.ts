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

  getPatientById(id : any): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/find/${id}`);
  }

  update(data: Patient): Observable<Patient> {
    return this.http.put(`${this.apiUrl}/update`, data);
  }

  login(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/login`, patient);
  }


  // login(email : String, pass : string): Observable<any>{
  //   return this.http.post(`${this.apiUrl}/login?email=${email}&pass=${pass}`, {});
  // }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // findByTitle(title: any): Observable<Patient[]> {
  //   return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  // }


}
