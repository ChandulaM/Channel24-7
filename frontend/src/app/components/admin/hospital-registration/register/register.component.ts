import { Component, OnInit } from '@angular/core';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { Hospital } from 'src/app/models/Hospital';
import { HospitalServiceService } from 'src/app/services/hospital-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hospital: Hospital = new Hospital();
  faStar = faStarOfLife;
  contactNoError: boolean = false;
  hospitalRegNoError: boolean = false;
  formError: boolean = false;

  constructor(private hospitalService: HospitalServiceService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.formError = false;
    this.hospitalRegNoError = false;
    this.contactNoError = false;
    if (this.validateFields()) {
      this.hospital.status = 'active';

      this.hospitalService.registerHospital(this.hospital).subscribe(
        (res) => {
          alert('Hospital added');
        },
        (err) => {
          alert('Error in adding.' + err);
        }
      );
      this.clearFields();
    } else {
      if (this.hospitalRegNoError || this.contactNoError) {
        this.formError = false;
      } else {
        this.formError = true;
      }
    }
  }

  validateFields(): boolean {
    return (
      this.validateEmail() &&
      this.validateAddress() &&
      this.validateCity() &&
      this.validateContactNo() &&
      this.validateName() &&
      this.validateHospitalRegNo()
    );
  }

  validateName(): boolean {
    if (!this.hospital.hospitalName) {
      return false;
    } else {
      return true;
    }
  }

  validateAddress(): boolean {
    if (!this.hospital.hospitalAddress) {
      return false;
    } else {
      return true;
    }
  }

  validateCity(): boolean {
    if (!this.hospital.city) {
      return false;
    } else {
      return true;
    }
  }

  validateContactNo(): boolean {
    if (!this.hospital.contactNo) {
      return false;
    } else if (this.hospital.contactNo.length != 10) {
      this.contactNoError = true;
      return false;
    } else {
      return true;
    }
  }
  validateEmail(): boolean {
    if (!this.hospital.email) {
      return false;
    } else {
      return true;
    }
  }
  validateHospitalRegNo(): boolean {
    if (!this.hospital.hospitalRegNo) {
      return false;
    } else if (this.hospital.hospitalRegNo.length != 6) {
      this.hospitalRegNoError = true;
      return false;
    } else {
      return true;
    }
  }

  clearFields(): void {
    this.hospital.hospitalName = '';
    this.hospital.hospitalRegNo = '';
    this.hospital.hospitalAddress = '';
    this.hospital.city = '';
    this.hospital.contactNo = '';
    this.hospital.email = '';
  }
}
