import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Doctor } from 'src/app/models/Doctor';
import { Specialization } from 'src/app/models/Specialization';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { SpecializationServiceService } from 'src/app/services/specialization-service.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {


  public results = [];

  public doctors: Array<Doctor> = [];

  public specializationList: Array<Specialization> = [];

  public specialization: string = '' 

  constructor(private router: Router, private route: ActivatedRoute, private service: DoctorServiceService, private specializationService: SpecializationServiceService) { }

  ngOnInit(): void {

    this.service.getDoctors().subscribe(res => {
      console.log(res);
      this.doctors = res.results;
      this.specializationService.getAllSpecializations().subscribe(res => {
        this.specializationList = res.result
      })
    })

  }

  addDoctorPage() {
    this.router.navigate(['hospitalmanager/adddoctor'])
  }

  viewDoctorPage(doctor: any) {
    localStorage.setItem('doctor', JSON.stringify(doctor))
    this.router.navigate(['hospitalmanager/doctors', doctor.doc_id])
  }

  onChangeSpecialization() {

    if(this.specialization=='') {
      this.service.getDoctors().subscribe(res => {
        this.doctors = res.results
      })
    }

    this.service.getAllDoctorsBySpecialization(this.specialization).subscribe(res => {
      this.doctors = res.results
    })
  }

}
