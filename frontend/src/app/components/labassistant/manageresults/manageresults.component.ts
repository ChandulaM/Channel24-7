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
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  delete($event: any): void {
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
}
