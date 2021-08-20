import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { RegistrationhomeComponent } from './components/admin/hospital-registration/registration-home/registrationhome.component';
import { HomepgComponent } from './components/patient/homepg/homepg.component';
import { SelectAppointmentComponent } from './components/patient/select-appointment/select-appointment.component';
import { BookAppointmentComponent } from './components/patient/book-appointment/book-appointment.component';
import { PatientDetailsComponent } from './components/patient/patient-details/patient-details.component';
import { PatientCheckOutComponent } from './components/patient/patient-check-out/patient-check-out.component';
import { MyAppointmentsComponent } from './components/patient/my-appointments/my-appointments.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: 'hospitalmanager',
    component: DashboardHospitalmanagerComponent,
  },
  {
    path: 'admin/registerHospital',
    component: RegistrationhomeComponent,
  },
  {
    path: 'patient/home',
    component: HomepgComponent,
  }, 
  {
    path: 'patient/sa',
    component: SelectAppointmentComponent,
  }, 
  {
    path: 'patient/bk',
    component: BookAppointmentComponent,
  }, 
  {
    path: 'patient/pd',
    component: PatientDetailsComponent,
  }, 
  {
    path: 'patient/pc',
    component: PatientCheckOutComponent,
  }, 
  {
    path: 'patient/my-appointments',
    component: MyAppointmentsComponent,
  }, 
  {
    path: 'patient/my-profile',
    component: PatientProfileComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
