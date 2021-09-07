import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-addlabtest',
  templateUrl: './addlabtest.component.html',
  styleUrls: ['./addlabtest.component.css'],
})
export class AddlabtestComponent implements OnInit {
  name: string = '';
  price: string = '';
  desc: string = '';

  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    axios
      .post('http://localhost:8081/labtest/add', {
        testName: this.name,
        price: this.price,
        description: this.desc,
      })
      .then((res) => {
        alert('Succesfully added');
      })
      .catch((err) => console.log(err));
  }

  updateName($event: any): void {
    this.name = $event.target.value;
  }

  updatePrice($event: any): void {
    this.price = $event.target.value;
  }

  updateDesc($event: any): void {
    this.desc = $event.target.value;
  }
}
