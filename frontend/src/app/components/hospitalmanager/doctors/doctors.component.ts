import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Doctor } from 'src/app/models/Doctor';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {


  public results = []

  public doctors: Array<Doctor> = []

  constructor(private router: Router, private route: ActivatedRoute, private service: DoctorServiceService) { }

  ngOnInit(): void {

    this.service.getDoctors().subscribe(res => {
      console.log(res)
      this.doctors = res.results
    })

  }

  addDoctorPage() {
    this.router.navigate(['hospitalmanager/adddoctor'])
  }

  viewDoctorPage(doctor: any) {
    localStorage.setItem('doctor', JSON.stringify(doctor))
    this.router.navigate(['hospitalmanager/doctors', doctor.doc_id])
  }

}
