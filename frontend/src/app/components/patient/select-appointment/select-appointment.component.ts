import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-select-appointment',
  templateUrl: './select-appointment.component.html',
  styleUrls: ['./select-appointment.component.css']
})


export class SelectAppointmentComponent implements OnInit {

  doctors:any;
  docName: any;
  doc!: Doctor;

  callBook(){
    setTimeout(()=>{
      this.router.navigate(['patient/time-slots']);   
      },1000);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.doctors = [
      { id: 0, name : "A.M. Kumar", specialization: "Dentist", hospital:"Asiri-Kandy" },
      { id: 2, name: "A.C Dilshan", specialization: "Dentist", hospital:"Asiri-Kandy" },
      { id: 2, name: "K.D. Munasighe", specialization: "Dentist", hospital:"Asiri-Colombo" },
      { id: 2, name: "A.N. Bandara", specialization: "Dentist", hospital:"Asiri-Colombo" },
      { id: 2, name: "A.C.N Perera", specialization: "Dentist", hospital:"Asiri-Colombo" },
      { id: 2, name: "N.Jim", specialization: "Dentist", hospital:"Asiri-Kurunagala" },
      { id: 2, name: "A.R.P. Sunimal", specialization: "Dentist", hospital:"Asiri-Kurunagala" },
    ];
  }

  

  searchName(){
    if(this.docName == ''){
      return this.ngOnInit();
    }else{
      this.doctors = this.doctors.filter((doc:any) =>{
        return doc.name.toLocaleLowerCase().match(this.docName.toLocaleLowerCase());
      })
    }
  } 

  

  // employees: Observable<Employee[]>;

  // constructor(private employeeService: EmployeeService,
  //   private router: Router) {}

  // ngOnInit() {
  //   this.reloadData();
  // }

  // reloadData() {
  //   this.employees = this.employeeService.getEmployeesList();
  // }

  // deleteEmployee(id: number) {
  //   this.employeeService.deleteEmployee(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  // employeeDetails(id: number){
  //   this.router.navigate(['details', id]);
  // }

  // updateEmployee(id: number){
  //   this.router.navigate(['update', id]);
  // }

}
