import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { HospitalRegistrationComponent } from './components/admin/hospital-registration/hospital-registration.component';
import { HeaderComponent } from './components/admin/header/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistrationFormComponent } from './components/admin/hospitalsRegistration/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHospitalmanagerComponent,
    HospitalRegistrationComponent,
    HeaderComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
