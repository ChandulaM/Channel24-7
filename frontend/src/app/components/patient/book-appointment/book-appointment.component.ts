import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  datevalue: any;
  shedules : any;
  constructor(private router: Router) { }


  

  
  ngOnInit(): void {
    this.shedules = [
      { id: 0, date : "2021-08-22", time: "05:30PM", ap:23 , availabilty: "Available"},
      { id: 1, date: "2021-08-23", time: "06:30AM", ap:12,  availabilty: "Available"},
      { id: 2, date: "2021-08-23", time: "02:30PM", ap:11, availabilty: "Available" },
      { id: 3, date: "2021-08-24", time: "03:30PM", ap:10, availabilty: "Available" },
      { id: 4, date: "2021-08-25", time: "06:30PM", ap:4 , availabilty: "Available"},
      { id: 5, date: "2021-08-26", time: "07:30AM", ap:4, availabilty: "Available" },
      { id: 6, date: "2021-08-29", time: "03:30PM", ap:3 , availabilty: "Available"},
    ];
  }

  callPd(){
    setTimeout(()=>{
      this.router.navigate(['patient/checkout']);   
      },1000);
  }

  searchDate(){
    if(this.datevalue == ''){
      return this.ngOnInit();
    }else{
      this.shedules = this.shedules.filter((shed:any) =>{
        return shed.date.toLocaleLowerCase().match(this.datevalue.toLocaleLowerCase());
      })
    }
  }

}
