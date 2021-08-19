import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maindhashboard',
  templateUrl: './maindhashboard.component.html',
  styleUrls: ['./maindhashboard.component.css']
})
export class MaindhashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showDashboard = (path: String):void => {
    console.log(path)
    this.router.navigate([path], {relativeTo: this.route})
  }

  showDoctors = ():void => {
    this.router.navigate(['doctors'], {relativeTo: this.route})
  }

}
