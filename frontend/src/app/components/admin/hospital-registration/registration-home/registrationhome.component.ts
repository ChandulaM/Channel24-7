import { Component, OnInit } from '@angular/core';
import { faHospital } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registrationhome',
  templateUrl: './registrationhome.component.html',
  styleUrls: ['./registrationhome.component.css'],
})
export class RegistrationhomeComponent implements OnInit {
  hospitalIcon = faHospital;

  constructor() {}

  ngOnInit(): void {}
}
