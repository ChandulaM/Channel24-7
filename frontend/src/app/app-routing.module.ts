import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { HospitalRegistrationComponent } from './components/admin/hospital-registration/hospital-registration.component';

const routes: Routes = [
  {
    path: 'hospitalmanager',
    component: DashboardHospitalmanagerComponent,
  },
  {
    path: 'admin/registerHospital',
    component: HospitalRegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
