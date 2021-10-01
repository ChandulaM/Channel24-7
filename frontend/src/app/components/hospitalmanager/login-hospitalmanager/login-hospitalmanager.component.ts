import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalManagerServiceService } from 'src/app/services/hospital-manager-service.service';
import { HospitalManagerService } from 'src/app/services/hospital-manager.service';

@Component({
  selector: 'app-login-hospitalmanager',
  templateUrl: './login-hospitalmanager.component.html',
  styleUrls: ['./login-hospitalmanager.component.css']
})
export class LoginHospitalmanagerComponent implements OnInit {

  constructor(private router: Router, private userService: HospitalManagerServiceService) { }

  username = ""
  password = ""

  isLoading: boolean = false;

  ngOnInit(): void {
  }

  login() {
    this.userService.loginUser(this.username, this.password).subscribe(res => {
      console.log(res.results)

      this.userService.getLoggedUser(res.results.id).subscribe(res => {
        console.log(res.results)
      })

      this.router.navigate(["/hospitalmanager"])
    })
  }

  register() {
    this.router.navigate(["/registerhospitalmanager"])
  }

}
