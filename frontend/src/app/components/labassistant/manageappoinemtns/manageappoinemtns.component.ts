import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-manageappoinemtns',
  templateUrl: './manageappoinemtns.component.html',
  styleUrls: ['./manageappoinemtns.component.css'],
})
export class ManageappoinemtnsComponent implements OnInit {
  appoiments: any = [];

  constructor() {}

  ngOnInit(): void {
    axios
      .get('http://localhost:8081/appoinment/all')
      .then((res) => {
        this.appoiments = res.data
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }
}
