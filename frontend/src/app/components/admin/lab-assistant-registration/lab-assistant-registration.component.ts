import { Component, OnInit } from '@angular/core';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lab-assistant-registration',
  templateUrl: './lab-assistant-registration.component.html',
  styleUrls: ['./lab-assistant-registration.component.css'],
})
export class LabAssistantRegistrationComponent implements OnInit {
  faFlask = faFlask;
  constructor() {}

  ngOnInit(): void {}
}
