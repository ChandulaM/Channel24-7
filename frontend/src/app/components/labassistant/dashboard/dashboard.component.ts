import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public menuItems = [
    {
      name: "Add Lab Test",
      path: "dashboard"
    },
    {
      name: "Manage Appoinments",
      path: "doctors"
    },
    {
      name: "Add Results",
      path: "dashboard"
    },
    {
      name: "Manage Tests",
      path: "doctors"
    },
    {
      name: "Reports",
      path: "dashboard"
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showPage(path: String) {
    this.router.navigate([path], {relativeTo: this.route})
  }

}
