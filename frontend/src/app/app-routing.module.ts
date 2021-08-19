import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { RegistrationhomeComponent } from './components/admin/hospital-registration/registration-home/registrationhome.component';
import { HomepgComponent } from './components/patient/homepg/homepg.component';
import { HospitalmanagerComponent } from './components/hospitalmanager/hospitalmanager/hospitalmanager.component';
import { DoctorsComponent } from './components/hospitalmanager/doctors/doctors.component';
import { AddDoctorComponent } from './components/hospitalmanager/add-doctor/add-doctor.component';

const routes: Routes = [
  {
    path: "hospitalmanager",
    redirectTo: 'hospitalmanager/dashboard',
    pathMatch: "full"
  },
  {
    path: 'hospitalmanager',
    component: HospitalmanagerComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardHospitalmanagerComponent
      },
      {
        path: "doctors",
        component: DoctorsComponent
      },
      {
        path: "adddoctor",
        component: AddDoctorComponent
      }
    ]
  },
  {
    path: 'admin/registerHospital',
    component: RegistrationhomeComponent,
  },
  {
    path: 'patient/home',
    component: HomepgComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
