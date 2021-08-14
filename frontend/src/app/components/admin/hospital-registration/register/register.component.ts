import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hospitalName: string = '';
  hospitalRegNo: string = '';
  hospitalAddress: string = '';
  city: string = '';
  contactNo: string = '';
  email: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.validateFields();

    const newHospital = {
      hospitalName: this.hospitalName,
      hospitalAddress: this.hospitalAddress,
      hospitalRegNo: this.hospitalRegNo,
      city: this.city,
      contactNo: this.contactNo,
      email: this.email,
    };

    this.clearFields();
  }

  validateFields(): void {}

  clearFields(): void {
    this.hospitalName = '';
    this.hospitalRegNo = '';
    this.hospitalAddress = '';
    this.city = '';
    this.contactNo = '';
    this.email = '';
  }
}
