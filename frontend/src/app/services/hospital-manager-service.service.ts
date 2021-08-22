import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO, UserRsults } from '../models/User';
import { Observable } from 'rxjs';
import { HospitalManagerDTO } from '../models/HosptalManager';

@Injectable({
  providedIn: 'root'
})
export class HospitalManagerServiceService {

  private userAPI = "http://localhost:8081/api/user";
  private hospitalManagerApi = "http://localhost:8081/api/hospitalmanager";

  constructor(private http: HttpClient) { }

  saveUser(user: UserDTO) : Observable<UserRsults> {
    return this.http.post<UserRsults>(this.userAPI+'/save',user);
  }

  saveHospitalManager(hospitalManager: HospitalManagerDTO): Observable<HospitalManagerDTO> {
    return this.http.post<HospitalManagerDTO>(this.hospitalManagerApi+'/save', hospitalManager);
  }

  checkHospitalAvailability(id: number): Observable<any> {
    return this.http.get<any>(this.hospitalManagerApi+'/check?id='+id);
  }

  checkUsernameAvailability(username: string): Observable<any> {
    return this.http.get<any>(this.userAPI+'/check?username='+username);
  }

}
