import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HospitalManagerService {
  private apiUrl = 'http://localhost:8081/api/hospitalmanager';

  constructor(private http: HttpClient) {}

  getPendingManagers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pending`);
  }

  getRegisteredManagers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/registered`);
  }

  acceptOrRejectManagerRequest(hospitalManager: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/accept`, hospitalManager, {
      observe: 'response',
    });
  }
}
