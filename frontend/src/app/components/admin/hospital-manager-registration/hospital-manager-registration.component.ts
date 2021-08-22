import { Component, OnInit } from '@angular/core';
import { faSearch, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { HospitalManagerService } from 'src/app/services/hospital-manager.service';

@Component({
  selector: 'app-hospital-manager-registration',
  templateUrl: './hospital-manager-registration.component.html',
  styleUrls: ['./hospital-manager-registration.component.css'],
})
export class HospitalManagerRegistrationComponent implements OnInit {
  managerIcon = faUserNurse;
  faSearch = faSearch;
  registered: any;

  constructor(private managerService: HospitalManagerService) {}

  ngOnInit(): void {
    this.managerService.getRegisteredManagers().subscribe(
      (data) => {
        this.registered = data;
      },
      (err) => console.log(err)
    );
  }

  onAccept() {
    this.managerService.getRegisteredManagers().subscribe(
      (data) => {
        this.registered = data;
      },
      (err) => console.log(err)
    );
  }
}
