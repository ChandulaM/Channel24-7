import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctors } from '../models/Doctors';
import { Doctor, DoctorDTO, SingleDoctor } from '../models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {


  private API: string = "http://localhost:8081/api/doctor";

  constructor(private http: HttpClient) { }

  public getDoctors(): Observable<Doctors> {
    return this.http.get<Doctors>(this.API + '/all');
  }

  public getAllDoctorsBySpecialization(name: string): Observable<Doctors> {
    return this.http.get<Doctors>(this.API + '/all?filterBy='+name);
  }

  public saveDoctor(doctor: DoctorDTO): Observable<DoctorDTO> {
    return this.http.post<DoctorDTO>(this.API+'/save',doctor);
  }

  public getDoctorById(id: number): Observable<SingleDoctor> {
    return this.http.get<SingleDoctor>(this.API+'/'+id);
  }

  public updateDoctor(doctor: DoctorDTO, id: number): Observable<SingleDoctor> {
    return this.http.post<SingleDoctor>(this.API+'/update/'+id,doctor);
  }
}
