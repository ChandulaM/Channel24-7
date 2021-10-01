import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-manageresults',
  templateUrl: './manageresults.component.html',
  styleUrls: ['./manageresults.component.css'],
})
export class ManageresultsComponent implements OnInit {
  results: any = [];

  constructor() {}

  ngOnInit(): void {
    axios
      .get('http://localhost:8081/result/all')
      .then((res) => {
        this.results = res.data;
        console.dir(res.data);
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
    let temp = $event.target.value;
    let newResults: any = [];
    this.results.forEach((data: any) => {
      if (data.refNumber.includes(temp)) {
        newResults.push(data);
      }
    });
    this.results = newResults;
  }

  sendEmail($email: any) {
    axios
      .post('http://localhost:8081/email/send', {
        email: $email,
        subject: 'Channel 24/4 emial service',
        message: 'we are informing about our service for you',
      })
      .then((res) => {
        this.results = res.data;
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  update($event: any) {
    const testName = prompt('Enter patient name');

    axios
      .post('http://localhost:8081/result/update', { patientName: testName })
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
      } else {
        data.patientName = testName;
        newResults.push(data);
      }
    });
    this.results = newResults;
  }
}
