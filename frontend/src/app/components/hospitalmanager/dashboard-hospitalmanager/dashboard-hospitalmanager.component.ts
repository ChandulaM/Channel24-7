import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Chart } from 'chart.js'

@Component({
  selector: 'app-dashboard-hospitalmanager',
  templateUrl: './dashboard-hospitalmanager.component.html',
  styleUrls: ['./dashboard-hospitalmanager.component.css']
})
export class DashboardHospitalmanagerComponent implements OnInit {


  chart: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Jan','Feb','March','April','May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "Appointments",
            data: [20,30,40,30,60,70,40,40,60,30,50,70],
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false
          }
        ]
      }
    })
  }

  showDashboard() {
    
  }

  managerProfile() {
    this.router.navigate(["hospitalmanager/managerprofile"])
  }

  hospitalProfile() {
    this.router.navigate(["hospitalmanager/hospitalprofile"])
  }

}
