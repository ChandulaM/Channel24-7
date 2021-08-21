import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string = '';
  mobileNum: string = '';
  password: string = '';
  cpassword: string = '';

  ngOnInit(): void {}

  submit(): void {
    if (this.email.trim() === '') {
      document.getElementById('erroremail')!.style.display = 'block';
      setTimeout(() => {
        document.getElementById('erroremail')!.style.display = 'none';
      }, 2000);
      return;
    } else {
      axios
        .post('http://localhost:8081/lab/assistant/signup', {
          email: this.email,
          password: this.password,
          status: 'approved',
        })
        .then((res) => alert('succesfully registered'))
        .catch((err) => console.log(err));
    }
  }

  updateEmail($event: any): void {
    this.email = $event.target.value;
  }

  updateMobile($event: any): void {
    this.mobileNum = $event.target.value;
  }

  updatePassword($event: any): void {
    this.password = $event.target.value;
  }

  updateCPassword($event: any): void {
    this.cpassword = $event.target.value;
  }
}
