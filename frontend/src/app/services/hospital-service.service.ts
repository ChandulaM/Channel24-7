import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hospital } from '../models/Hospital';

@Injectable({
  providedIn: 'root',
})
export class HospitalServiceService {
  private apiUrl: string = 'http://localhost:8081/api/hospitals/';

  constructor(private http: HttpClient) {}

  registerHospital(hospital: Hospital): Observable<Hospital> {
    return this.http.post<Hospital>(this.apiUrl, hospital);
  }

  getAllHospitals(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`${this.apiUrl}registered`);
  }

  updateHospitaleDetais(hospital: Hospital): Observable<Hospital> {
    return this.http.put<Hospital>(`${this.apiUrl}update`, hospital);
  }

  removeHospital(hospitalId: number, hospital: Hospital): Observable<Hospital> {
    return this.http.put<Hospital>(
      `${this.apiUrl}remove/${hospitalId}`,
      hospital
    );
  }

  getHospitals(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`${this.apiUrl}get-all`);
  }

}
