import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { HospitalRegistrationComponent } from './components/admin/hospital-registration/hospital-registration.component';
import { HomepgComponent } from './components/patient/homepg/homepg.component';



const routes: Routes = [
  {
    path: 'hospitalmanager',
    component: DashboardHospitalmanagerComponent,
  },
  {
    path: 'admin/registerHospital',
    component: HospitalRegistrationComponent,
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
