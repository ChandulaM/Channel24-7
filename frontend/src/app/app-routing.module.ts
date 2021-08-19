import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { RegistrationhomeComponent } from './components/admin/hospital-registration/registration-home/registrationhome.component';
import { HomepgComponent } from './components/patient/homepg/homepg.component';
import { HospitalmanagerComponent } from './components/hospitalmanager/hospitalmanager/hospitalmanager.component';
import { DoctorsComponent } from './components/hospitalmanager/doctors/doctors.component';
import { AddDoctorComponent } from './components/hospitalmanager/add-doctor/add-doctor.component';
import { HomeComponentsComponent } from './components/patient/home-components/home-components.component';
import { LoginComponent } from './components/labassistant/login/login.component';
import { SignupComponent } from './components/labassistant/signup/signup.component';
import { DashboardComponent } from './components/labassistant/dashboard/dashboard.component';
import { MaindhashboardComponent } from './components/labassistant/maindhashboard/maindhashboard.component';
import { AddlabtestComponent } from './components/labassistant/addlabtest/addlabtest.component';
import { ManageappoinemtnsComponent } from './components/labassistant/manageappoinemtns/manageappoinemtns.component';
import { ManageresultsComponent } from './components/labassistant/manageresults/manageresults.component';
import { ManagetestsComponent } from './components/labassistant/managetests/managetests.component';
import { ReportdashboardComponent } from './components/labassistant/reportdashboard/reportdashboard.component';
import { ReportdeliveryComponent } from './components/labassistant/reportdelivery/reportdelivery.component';
import { UpdatelabtestComponent } from './components/labassistant/updatelabtest/updatelabtest.component';
import { UploadresultComponent } from './components/labassistant/uploadresult/uploadresult.component';
import { UploadresultenquryComponent } from './components/labassistant/uploadresultenqury/uploadresultenqury.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

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
  {
    path: 'labassistant/login',
    component: LoginComponent,
  }, 
  {
    path: 'labassistant/signup',
    component: SignupComponent,
  }, 
  {
    path: 'labassistant/dashboard',
    component: MaindhashboardComponent,
  },
  {
    path: 'labassistant/addlabtest',
    component: AddlabtestComponent,
  },
  {
    path: 'labassistant/manageappoinemtns',
    component: ManageappoinemtnsComponent,
  },
  {
    path: 'labassistant/manageresults',
    component: ManageresultsComponent,
  },
  {
    path: 'labassistant/managetests',
    component: ManagetestsComponent,
  },
  {
    path: 'labassistant/reporthome',
    component: ReportdashboardComponent,
  },
  {
    path: 'labassistant/reportdelivery',
    component: ReportdeliveryComponent,
  },
  {
    path: 'labassistant/reportdemand',
    component: ReportdeliveryComponent,
  },
  {
    path: 'labassistant/updatelabtest',
    component: UpdatelabtestComponent,
  },
  {
    path: 'labassistant/uploadresult',
    component: UploadresultComponent,
  },
  {
    path: 'labassistant/uploadresulten',
    component: UploadresultenquryComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
