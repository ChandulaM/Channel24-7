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
    return this.http.get<Hospital[]>(this.apiUrl);
  }
}
