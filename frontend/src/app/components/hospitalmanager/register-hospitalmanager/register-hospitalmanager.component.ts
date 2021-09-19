import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { HospitalManagerServiceService } from 'src/app/services/hospital-manager-service.service';
import { Router } from '@angular/router';
import { HospitalServiceService } from 'src/app/services/hospital-service.service';
import { Hospital } from 'src/app/models/Hospital';

@Component({
  selector: 'app-register-hospitalmanager',
  templateUrl: './register-hospitalmanager.component.html',
  styleUrls: ['./register-hospitalmanager.component.css']
})
export class RegisterHospitalmanagerComponent implements OnInit {


  step = 1;
  userFormData: boolean = true;
  hospitalFormData: boolean = false;
  verificationFormData: boolean = false;

  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  fname: string = '';
  lname: string = '';
  hospital: string = '';
  email: string = '';
  sendingCode: number = 1000;
  confirmation: string = '';
  confrimationError: boolean = false;
  isHospitalAvailable: boolean = false;
  isUsernameAvailable: boolean = false;

  hospitalList: Array<Hospital> = []; 

  constructor(private service:HospitalManagerServiceService, private router: Router, private hospitalService: HospitalServiceService) { }

  ngOnInit(): void {

    this.hospitalService.getHospitals().subscribe(res => {
      console.log(res)
      this.hospitalList = res
    })

  }


  next() {
    this.step++;
    if(this.step>3) {
      this.step = 3;
    }
    if(this.step==1) {
      this.userFormData = true;
      this.hospitalFormData = false;
      this.verificationFormData = false;
    }
    if(this.step==2) {
      this.userFormData = false;
      this.hospitalFormData = true;
      this.verificationFormData = false;
    }
    if(this.step==3) {
      this.userFormData = false;
      this.hospitalFormData = false;
      this.verificationFormData = true;
    }
    console.log(this.step)
  }

  previous() {
    this.step--;
    if(this.step<1) {
      this.step = 1;
    }
    if(this.step==1) {
      this.userFormData = true;
      this.hospitalFormData = false;
      this.verificationFormData = false;
    }
    if(this.step==2) {
      this.userFormData = false;
      this.hospitalFormData = true;
      this.verificationFormData = false;
    }
    if(this.step==3) {
      this.userFormData = false;
      this.hospitalFormData = false;
      this.verificationFormData = true;
    }
    console.log(this.step)
  }

  sendConfirmEmail() {

    this.sendingCode =  Math.floor(Math.random()*9000+1000);

    console.log(this.sendingCode)

    var templateParam = {
      to_name: this.fname,
      confrimation_code: this.sendingCode,
      user_email: this.email
    }

    emailjs.send('service_ypy5zak','template_dua19hi', templateParam, 'user_hTZQq5uFzSAnCR7Dthq5u')
      .then((res) => {
        console.log(res.status, res.text);
        this.next()
      }).catch(err => {
        console.log(err)
      })

  }

  submitForm() {
    var code = Number(this.confirmation)
    console.log(code)
    console.log('sending code'+this.sendingCode)

    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: 'hospital_manager'
    }

    if(code==this.sendingCode) {
        this.service.saveUser(user).subscribe(res => {
          console.log(res)
          const hospitalManager = {
            fname: this.fname,
            lname: this.lname,
            hospital_id: 102,
            user_id: res.results.id
          }
          this.service.saveHospitalManager(hospitalManager).subscribe(res => {
            console.log(res)
            this.router.navigate(['/hospitalmanager'])
          })
        })    
    }

  }

  onChangeUsername() {
    this.service.checkUsernameAvailability(this.username).subscribe(res => {
      console.log(res)
      this.isUsernameAvailable = res.result;
    })
  }

  onChangeHospitalSelect() {
    this.service.checkHospitalAvailability(parseInt(this.hospital)).subscribe(res => {
      console.log(res)
      this.isHospitalAvailable = res.result;
    });
  }

}
