import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-managetests',
  templateUrl: './managetests.component.html',
  styleUrls: ['./managetests.component.css']
})
export class ManagetestsComponent implements OnInit {


  results: any = [];

  constructor() {}

  ngOnInit(): void {
    axios
      .get('http://localhost:8081/labtest/all')
      .then((res) => {
        this.results = res.data;
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  delete($event: any): void {

    axios
    .post('http://localhost:8081/result/delete')
    .then((res) => {
      this.results = res.data;
      console.log(res.data);
    })
    .catch((err) => console.log(err));

    let id: Number = $event.target.parentNode.previousSibling.innerHTML;
    let newResults: any = [];
    this.results.forEach((data: any) => {
      if (data.id != id) {
        newResults.push(data);
      }
    });
    this.results = newResults;
  }

  search($event: any) {
    let temp =$event.target.value;
    let newResults: any = [];
    this.results.forEach((data: any) => {
      if (data.refNumber.includes(temp)) {
        newResults.push(data);
      }
    });
    this.results = newResults;
  }

  sendEmail($email: any){
    axios
    .post('http://localhost:8081/email/send', {
      'email': $email,
      'subject': "Channel 24/4 emial service",
      "message": "we are informing about our service for you"
    })
    .then((res) => {
      this.results = res.data;
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  }

}
