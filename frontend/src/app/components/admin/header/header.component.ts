import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition, faHospital } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  title?: string;

  @Input()
  icon?: IconDefinition | undefined;

  faHospital = faHospital;

  constructor() {}

  ngOnInit(): void {}
}
