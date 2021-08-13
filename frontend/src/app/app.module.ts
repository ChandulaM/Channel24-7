import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { HospitalRegistrationComponent } from './components/admin/hospital-registration/hospital-registration.component';
import { HeaderComponent } from './components/admin/header/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistrationFormComponent } from './components/admin/hospitalsRegistration/registration-form/registration-form.component';
import { TopnavComponent } from './components/patient/commons/topnav/topnav.component';
import { FooterComponent } from './components/patient/commons/footer/footer.component';
import { HomepgComponent } from './components/patient/homepg/homepg.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHospitalmanagerComponent,
    HospitalRegistrationComponent,
    HeaderComponent,
    RegistrationFormComponent,
    TopnavComponent,
    FooterComponent,
    HomepgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
