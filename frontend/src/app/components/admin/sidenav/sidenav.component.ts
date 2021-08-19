import { Component, OnInit } from '@angular/core';
import {
  faFile,
  faFlask,
  faHospital,
  faUserNurse,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  hospitalIcon = faHospital;
  nurseIcon = faUserNurse;
  labAssistantIcon = faFlask;
  reportIcon = faFile;

  menuItems = [
    {
      name: 'Hospitals',
      icon: this.hospitalIcon,
    },
    {
      name: 'Hospital Managers',
      icon: this.nurseIcon,
    },
    {
      name: 'Lab Assistants',
      icon: this.labAssistantIcon,
    },
    {
      name: 'Reports',
      icon: this.reportIcon,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
