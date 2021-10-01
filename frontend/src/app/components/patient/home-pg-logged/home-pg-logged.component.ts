import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-pg-logged',
  templateUrl: './home-pg-logged.component.html',
  styleUrls: ['./home-pg-logged.component.css']
})
export class HomePgLoggedComponent implements OnInit {

  patientId = "";

  constructor() { }

  ngOnInit(): void {
    console.log("sddsdsdsdsdsdsd")
    console.log(history.state.patientId);
    this.patientId = history.state.patientId;
   
  }

}
