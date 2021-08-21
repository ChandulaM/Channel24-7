import { Component, OnInit } from '@angular/core';
import { faSearch, faUserNurse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hospital-manager-registration',
  templateUrl: './hospital-manager-registration.component.html',
  styleUrls: ['./hospital-manager-registration.component.css'],
})
export class HospitalManagerRegistrationComponent implements OnInit {
  managerIcon = faUserNurse;
  faSearch = faSearch;

  constructor() {}

  ngOnInit(): void {}
}
