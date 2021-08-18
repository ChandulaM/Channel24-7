import { Component, OnInit } from '@angular/core';
import { faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Hospital } from 'src/app/models/Hospital';
import { HospitalServiceService } from 'src/app/services/hospital-service.service';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css'],
})
export class HospitalListComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  registeredHospitals: Hospital[] = [];
  numberOfHospitals: any;
  pageNo: number = 1;

  constructor(private hospitalService: HospitalServiceService) {}

  ngOnInit(): void {
    this.hospitalService.getAllHospitals().subscribe((hospitals) => {
      this.registeredHospitals = hospitals;
      this.numberOfHospitals = hospitals.length;
    });
  }
}
