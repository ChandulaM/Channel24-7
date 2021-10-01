import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO, UserRsults } from '../models/User';
import { Observable } from 'rxjs';
import { HospitalManagerDTO, HospitalManagerResult } from '../models/HosptalManager';

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

  loginUser(username: string, password: string): Observable<UserRsults> {
    return this.http.get<UserRsults>(this.userAPI+'/login?username='+username+'&password='+password);
  }

  getLoggedUser(id: number): Observable<HospitalManagerResult> {
    return this.http.get<HospitalManagerResult>(this.hospitalManagerApi+'/user?id='+id);
  }

}
