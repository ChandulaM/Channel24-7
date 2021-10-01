import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecializationServiceService {

  private API = "http://localhost:8081/api/specialization";

  constructor(private http: HttpClient) { }

  getAllSpecializations(): Observable<any> {
    return this.http.get<any>(this.API+'/all');
  }

}
