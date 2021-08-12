import { Component, OnInit, Input } from '@angular/core';
import { faHospital, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  title?: string;

  @Input()
  headerIcon?: IconDefinition;

  faHospital = faHospital;

  constructor() {}

  ngOnInit(): void {}
}
