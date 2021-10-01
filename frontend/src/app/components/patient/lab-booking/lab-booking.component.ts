import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { HospitalServiceService } from 'src/app/services/hospital-service.service';
import { SpecializationServiceService } from 'src/app/services/specialization-service.service';

@Component({
  selector: 'app-lab-booking',
  templateUrl: './lab-booking.component.html',
  styleUrls: ['./lab-booking.component.css']
})
export class LabBookingComponent implements OnInit {
  labs:any;
  filterLabs: any;
  docName: any;
  price:any;
  docSpe: any;
  docHos:any;
  doc!: Doctor;
  session : any;
  searchObj:any;
  hospitals: any;
  special: any;
  selectedLab: any;

  callBook(id:any){
      this.selectedLab = this.labs.find((x:any) => x.id === id);
      console.log(this.selectedLab);
      this.localStor.store("lab", this.selectedLab);
      this.router.navigate(['patient/enter-details']);  
  }

  refresh(){
    window.location.reload();
  }

  constructor(private router: Router, private localStor : LocalStorageService,  private sessionSt : SessionStorageService,  private hospitalService : HospitalServiceService, private doctorService : DoctorServiceService, private specialization : SpecializationServiceService) { }
  
  

  // filterPrice(val:any){
  //   this.filterLabs = this.labs;
  //   if(val== null){
  //     return this.ngOnInit();
  //   }else{
  //     this.filterLabs = this.filterLabs.filter((doc:any) =>{
  //       console.log(val);
  //       if(doc.price <= this.price)
  //         return doc.price
  //     })
  //   }
  // }
  

  searchSpe(val:any){
    if(val == null){
      return this.ngOnInit();
    }else{
      this.labs = this.labs.filter((doc:any) =>{
        return doc.name.toLocaleLowerCase().match(val.toLocaleLowerCase());
      })
    }
  } 

  

  searchHos(val:any){
    if(val != null){
      console.log(val);
      this.labs = this.labs.filter((doc:any) =>{
        return doc.hospital.toLocaleLowerCase().match(val.toLocaleLowerCase());
      })
    }else{
      return this.ngOnInit();
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
    console.log(this.searchObj,"saldkajlaksdjlfaskjdflk");
    this.session = this.sessionSt.retrieve("logged");


    this.labs = [
      { id: 0, name :"Full Blood Count", hospital:"Asiri-Kandy" , price:2000 },
      { id: 1, name: "Full Blood Count", hospital:"Asiri-Colombo", price:2000 },
      { id: 2, name: "Full Blood Count", hospital:"CCC-Kandy", price:2500 },
      { id: 3, name: "Lipid Test", hospital:"Asiri-Kandy", price:2500 },
      { id: 4, name: "Lipid Test", hospital:"Asiri-Colombo", price:2500 },
      { id: 2, name: "Lipid Test", hospital:"CCC-Kandy", price:2500 },
      { id: 5, name: "Full body checkup", hospital:"Asiri-Kandy", price:10000 },
      { id: 6, name: "Full body checkup", hospital:"Asiri-Colombo", price:1000 },
      { id: 7, name: "X-Rays", hospital:"Asiri-Colombo", price:3000 },
      { id: 8, name: "X-Rays", hospital:"Asiri-Kandy", price:3000 },
      { id: 9, name: "CT-Scan", hospital:"Asiri-Colombo", price:4000 },
      { id: 9, name: "CT-Scan", hospital:"Asiri-Kandy", price:4000 },
    ];
    
  }

  


}
