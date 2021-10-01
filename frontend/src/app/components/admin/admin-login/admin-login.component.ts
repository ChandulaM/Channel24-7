import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  displayError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogin(): void {
    if (this.username == 'channeladmin' && this.password == 'admin123') {
      this.displayError = false;
      this.router.navigate(['admin']);
    } else {
      this.displayError = true;
    }
  }
}
