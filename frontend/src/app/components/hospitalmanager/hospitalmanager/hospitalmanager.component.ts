import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospitalmanager',
  templateUrl: './hospitalmanager.component.html',
  styleUrls: ['./hospitalmanager.component.css']
})
export class HospitalmanagerComponent implements OnInit {

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
