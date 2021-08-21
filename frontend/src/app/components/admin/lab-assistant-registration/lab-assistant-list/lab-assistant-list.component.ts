import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lab-assistant-list',
  templateUrl: './lab-assistant-list.component.html',
  styleUrls: ['./lab-assistant-list.component.css'],
})
export class LabAssistantListComponent implements OnInit {
  faSearch = faSearch;
  constructor() {}

  ngOnInit(): void {}
}
