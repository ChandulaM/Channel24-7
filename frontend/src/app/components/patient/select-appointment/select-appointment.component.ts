import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { HospitalServiceService } from 'src/app/services/hospital-service.service';
import { SpecializationServiceService } from 'src/app/services/specialization-service.service';

@Component({
  selector: 'app-select-appointment',
  templateUrl: './select-appointment.component.html',
  styleUrls: ['./select-appointment.component.css']
})


export class SelectAppointmentComponent implements OnInit {

  doctors:any;
  docName: any;
  docSpe: any;
  docHos:any;
  doc!: Doctor;
  session : any;
  searchObj:any;
  hospitals: any;
  special: any;
  selectedDoc: any;

  callBook(id: any){
      this.selectedDoc = this.doctors.find((x:any) => x.id === id);
      console.log(this.selectedDoc);
      this.localStor.store("doc", this.selectedDoc); 
      this.router.navigate(['patient/time-slots']);      
  }

  refresh(){
    window.location.reload();
  }

  constructor(private router: Router,  private sessionSt : SessionStorageService, private localStor : LocalStorageService,  private hospitalService : HospitalServiceService, private doctorService : DoctorServiceService, private specialization : SpecializationServiceService) { }
  
  
  searchName(){
    if(this.docName == ''){
      return this.ngOnInit();
    }else{
      this.doctors = this.doctors.filter((doc:any) =>{
        return doc.name.toLocaleLowerCase().match(this.docName.toLocaleLowerCase());
      })
    }
  } 

  searchSpe(){
    if(this.docSpe == ''){
      return this.ngOnInit();
    }else{
      this.doctors = this.doctors.filter((doc:any) =>{
        return doc.specialization.toLocaleLowerCase().match(this.docSpe.toLocaleLowerCase());
      })
    }
  } 

  searchHos(){
    if(this.docHos == ''){
      return this.ngOnInit();
    }else{
      this.doctors = this.doctors.filter((doc:any) =>{
        return doc.hospital.toLocaleLowerCase().match(this.docHos.toLocaleLowerCase());
      })
    }
  } 




  ngOnInit(): void {
   
    this.specialization.getAllSpecializations().subscribe(res => {
      this.special = res.result;
    })


    this.hospitalService.getAllHospitals().subscribe((data :any) => {
      this.hospitals = data;
    })

    this.searchObj = history.state;
    this.session = this.sessionSt.retrieve("logged");


    if(this.searchObj.searchDocSpecial != null){
      if(this.searchObj.searchDocSpecial == 'Cardiologist'){
        this.doctors = [
          { id: 0, name : "A.M. Kumar", specialization: "Cardiologist", hospital:"Asiri-Kandy", pay:3000 },
          { id: 1, name: "A.C Dilshan", specialization: "Cardiologist", hospital:"Asiri-Kandy", pay:3000 },
          { id: 2, name: "K.D. Munasighe", specialization: "Cardiologist", hospital:"Asiri-Colombo", pay:3000 },
        ];
      } else if(this.searchObj.searchDocSpecial == 'Dentist'){
        this.doctors = [
       
        { id: 3, name: "A.N. Bandara", specialization: "Dentist", hospital:"Asiri-Colombo", pay:2000 },
        { id: 4, name: "A.C.N Perera", specialization: "Dentist", hospital:"Asiri-Colombo", pay:2500 },
        { id: 5, name: "N.Jim", specialization: "Dentist", hospital:"Asiri-Kurunagala", pay:2500 },
        { id: 6, name: "A.R.P. Sunimal", specialization: "Dentist", hospital:"Asiri-Kurunagala", pay:2000 },
        ];
      }
    }else if(this.searchObj.searchDocHospital != null){
      console.log("hospital")
      this.doctors = [
        { id: 0, name : "A.M. Kumar", specialization: "Cardiologist", hospital:"Asiri-Kandy", pay:3000 },
        { id: 1, name: "A.C Dilshan", specialization: "Surgeon", hospital:"Asiri-Kandy", pay:2500 },
        { id: 2, name: "K.D. Munasighe", specialization: "Dentist", hospital:"Asiri-Kandy", pay:2000 },
        
      ];
    }else if(this.searchObj.apDate != null){
      this.doctors = [
        { id: 0, name : "A.M. Kumar", specialization: "Cardiologist", hospital:"Asiri-Kandy", pay:3000 },
        { id: 1, name: "A.C Dilshan", specialization: "Dentist", hospital:"Asiri-Kandy", pay:3000 },
        { id: 2, name: "K.D. Munasighe", specialization: "Dentist", hospital:"Asiri-Colombo", pay:3000 },
        { id: 3, name: "A.N. Bandara", specialization: "Dentist", hospital:"Asiri-Colombo", pay:3000 },
        { id: 4, name: "A.C.N Perera", specialization: "Dentist", hospital:"Asiri-Colombo", pay:3000 },
        { id: 5, name: "N.Jim", specialization: "Dentist", hospital:"Asiri-Kurunagala", pay:3000 },
        { id: 6, name: "A.R.P. Sunimal", specialization: "Dentist", hospital:"Asiri-Kurunagala", pay:3000 },
      ];
    }else{
      this.doctors = [
        { id: 0, name : "A.M. Kumar", specialization: "Dentist", hospital:"Asiri-Kandy", pay:3000 },
        { id: 1, name: "A.C Dilshan", specialization: "Dentist", hospital:"Asiri-Kandy" , pay:3000},
        { id: 2, name: "K.D. Munasighe", specialization: "Dentist", hospital:"Asiri-Colombo", pay:3000 },
        { id: 3, name: "A.N. Bandara", specialization: "Dentist", hospital:"Asiri-Colombo", pay:3000 },
        { id: 4, name: "A.C.N Perera", specialization: "Dentist", hospital:"Asiri-Colombo", pay:3000 },
        { id: 5, name: "N.Jim", specialization: "Dentist", hospital:"Asiri-Kurunagala", pay:3000 },
        { id: 6, name: "A.R.P. Sunimal", specialization: "Dentist", hospital:"Asiri-Kurunagala", pay:3000 },
      ];
    }
  
  }

  

  



}
