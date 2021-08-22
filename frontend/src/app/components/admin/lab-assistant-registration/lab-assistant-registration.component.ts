import { Component, OnInit } from '@angular/core';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-lab-assistant-registration',
  templateUrl: './lab-assistant-registration.component.html',
  styleUrls: ['./lab-assistant-registration.component.css'],
})
export class LabAssistantRegistrationComponent implements OnInit {
  faFlask = faFlask;
  registered: any;

  constructor(private service: SampleServiceService) {}

  ngOnInit(): void {
    this.registered = this.service.getRegistered();
  }

  onAccept(event: any) {
    this.registered = event;
  }
}
