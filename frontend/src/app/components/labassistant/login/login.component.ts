import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    axios
      .post('http://localhost:8081/lab/assistant/login', {
        email: this.email,
        password: this.password,
      })
      .then((res) => {
        if (res.data === 'Invalid credentials') {
          document.getElementById('loginerror')!.style.display = 'block';
          setTimeout(() => {
            document.getElementById('loginerror')!.style.display = 'none';
          }, 2000);
        } else {
          alert('Success');
        }
      })
      .catch((err) => console.log(err));
  }

  updateEmail($event: any): void {
    this.email = $event.target.value;
  }

  updatePassword($event: any): void {
    this.password = $event.target.value;
  }
}
