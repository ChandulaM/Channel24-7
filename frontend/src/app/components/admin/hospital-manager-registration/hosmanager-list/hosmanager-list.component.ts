import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hosmanager-list',
  templateUrl: './hosmanager-list.component.html',
  styleUrls: ['./hosmanager-list.component.css'],
})
export class HosmanagerListComponent implements OnInit {
  faSearch = faSearch;

  constructor() {}

  ngOnInit(): void {}
}
