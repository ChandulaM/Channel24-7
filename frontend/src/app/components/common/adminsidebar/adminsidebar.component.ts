import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent implements OnInit {



  public menuItems = [
    {
      name: "Dashboard",
      path: "dashboard"
    },
    {
      name: "Doctors",
      path: "doctors"
    },
    {
      name: "Appointments",
      path: "appointments"
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showPage(path: String) {
    this.router.navigate([path], {relativeTo: this.route})
  }

}
