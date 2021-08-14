import { Component, OnInit } from '@angular/core';
import { faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css'],
})
export class HospitalListComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  constructor() {}

  ngOnInit(): void {}
}
