import { Component, OnInit } from '@angular/core';
import { HospitalServiceService } from 'src/app/services/hospital-service.service';

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
  status: string = 'active';

  constructor(private hospitalService: HospitalServiceService) {}

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
      status: this.status,
    };
    this.hospitalService.registerHospital(newHospital).subscribe(
      (res) => {
        alert('Hospital added');
      },
      (err) => {
        alert('Error in adding.' + err);
      }
    );
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
