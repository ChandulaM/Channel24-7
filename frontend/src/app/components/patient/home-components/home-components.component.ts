import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Specialization } from 'src/app/models/Specialization';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { HospitalServiceService } from 'src/app/services/hospital-service.service';
import {SpecializationServiceService} from 'src/app/services/specialization-service.service'


@Component({
  selector: 'app-home-components',
  templateUrl: './home-components.component.html',
  styleUrls: ['./home-components.component.css']
})
export class HomeComponentsComponent implements OnInit {
  searchForm: FormGroup|any;
  hospitals : any;
  special :Array<Specialization> = [];
  searchDocName = '';
  searchDocSpecial = '';
  searchDocHospital = '';
  apDate = '';
  searched :any;


  constructor(private router: Router, private fb : FormBuilder, private hospitalService : HospitalServiceService, private doctorService : DoctorServiceService, private specialization : SpecializationServiceService) { }

  

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchDocName : new FormControl(),
      searchDocSpecial :new FormControl(),
      searchDocHospital:new FormControl(),
      apDate: new FormControl()
    });

    this.specialization.getAllSpecializations().subscribe(res => {
      this.special = res.result;
      //console.log(res.result[0].name)
    })
      this.hospitalService.getAllHospitals().subscribe((data :any) => {
        this.hospitals = data;
      })
    
  }



  search(){
    console.log(this.searchForm.value);

    console.log('in search')
    this.searched = this.searchForm.value;
    this.router.navigate(['patient/select-doctor'], {"state": this.searched});
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

}
