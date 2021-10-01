import { Component, OnInit } from '@angular/core';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { Hospital } from 'src/app/models/Hospital';
import { HospitalServiceService } from 'src/app/services/hospital-service.service';

@Component({
  selector: 'app-registrationhome',
  templateUrl: './registrationhome.component.html',
  styleUrls: ['./registrationhome.component.css'],
})
export class RegistrationhomeComponent implements OnInit {
  hospitalIcon = faHospital;
  registeredHospitals: Hospital[] = [];

  constructor(private hospitalService: HospitalServiceService) {}

  ngOnInit(): void {
    this.hospitalService.getAllHospitals().subscribe((data) => {
      this.registeredHospitals = data;
    });
  }

  reloadHospitals() {
    this.hospitalService.getAllHospitals().subscribe((data) => {
      this.registeredHospitals = data;
    });
  }
}
