import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { RegistrationhomeComponent } from './components/admin/hospital-registration/registration-home/registrationhome.component';
import { HomepgComponent } from './components/patient/homepg/homepg.component';
import { SelectAppointmentComponent } from './components/patient/select-appointment/select-appointment.component';
import { BookAppointmentComponent } from './components/patient/book-appointment/book-appointment.component';
import { HospitalmanagerComponent } from './components/hospitalmanager/hospitalmanager/hospitalmanager.component';
import { DoctorsComponent } from './components/hospitalmanager/doctors/doctors.component';
import { AddDoctorComponent } from './components/hospitalmanager/add-doctor/add-doctor.component';

import { SingleDoctorComponent } from './components/hospitalmanager/single-doctor/single-doctor.component';
import { RegisterHospitalmanagerComponent } from './components/hospitalmanager/register-hospitalmanager/register-hospitalmanager.component';

import { HomeComponentsComponent } from './components/patient/home-components/home-components.component';
import { HospitalManagerRegistrationComponent } from './components/admin/hospital-manager-registration/hospital-manager-registration.component';
import { LabAssistantRegistrationComponent } from './components/admin/lab-assistant-registration/lab-assistant-registration.component';
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
    path: "registerhospitalmanager",
    component: RegisterHospitalmanagerComponent
  },
  {
    path: "hospitalmanager",
    redirectTo: 'hospitalmanager/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'hospitalmanager',
    component: HospitalmanagerComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardHospitalmanagerComponent,
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
      },
      {
        path: "adddoctor",
        component: AddDoctorComponent
      },
      {
        path: "doctors/:id",
        component: SingleDoctorComponent
      }
    ]
  },
  {
    path: 'admin',
    component: RegistrationhomeComponent,
  },
  {
    path: 'admin/hospital-managers',
    component: HospitalManagerRegistrationComponent,
  },
  {
    path: 'admin/lab-assistants',
    component: LabAssistantRegistrationComponent,
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
