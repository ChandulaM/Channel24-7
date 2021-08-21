import { Component, OnInit } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lab-assistant-accept',
  templateUrl: './lab-assistant-accept.component.html',
  styleUrls: ['./lab-assistant-accept.component.css'],
})
export class LabAssistantAcceptComponent implements OnInit {
  faAccept = faCheck;
  faReject = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onViewModal(): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#acceptOrRejectModal');
    container?.appendChild(button);
    button.click();
  }
}
