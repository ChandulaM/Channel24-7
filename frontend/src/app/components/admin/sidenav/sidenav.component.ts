import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      path: 'admin',
    },
    {
      name: 'Hospital Managers',
      icon: this.nurseIcon,
      path: 'admin/hospital-managers',
    },
    {
      name: 'Lab Assistants',
      icon: this.labAssistantIcon,
      path: 'admin/lab-assistants',
    },
    {
      name: 'Reports',
      icon: this.reportIcon,
      path: 'admin/reports',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showPage(path: String) {
    this.router.navigate([path]);
  }
}
