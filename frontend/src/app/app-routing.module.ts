import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { RegistrationhomeComponent } from './components/admin/hospital-registration/registration-home/registrationhome.component';
import { HomepgComponent } from './components/patient/homepg/homepg.component';
import { HomeComponentsComponent } from './components/patient/home-components/home-components.component';



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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
