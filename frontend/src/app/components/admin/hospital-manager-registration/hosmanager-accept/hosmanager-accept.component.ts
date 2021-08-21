import { Component, OnInit } from '@angular/core';
import { faCheck, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hosmanager-accept',
  templateUrl: './hosmanager-accept.component.html',
  styleUrls: ['./hosmanager-accept.component.css'],
})
export class HosmanagerAcceptComponent implements OnInit {
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
