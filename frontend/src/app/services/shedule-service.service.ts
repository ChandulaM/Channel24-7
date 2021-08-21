import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SheduleDTO, SheduleList } from '../models/Shedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SheduleServiceService {

  private API = "http://localhost:8081/api/doctor/shedule"

  constructor(private http: HttpClient) { }


  addShedule(shedule: SheduleDTO): Observable<SheduleDTO> {
    return this.http.post<SheduleDTO>(this.API+'/save', shedule)
  }

  getDocShedules(docId: number): Observable<SheduleList> {
    return this.http.get<SheduleList>(this.API+'/all?docId='+docId);
  }

}
