import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopnavComponent } from './components/patient/commons/topnav/topnav.component';
import { FooterComponent } from './components/patient/commons/footer/footer.component';
import { HomepgComponent } from './components/patient/homepg/homepg.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ImageSliderComponent } from './components/patient/image-slider/image-slider.component';
import { RegisterComponent } from './components/admin/hospital-registration/register/register.component';
import { HospitalListComponent } from './components/admin/hospital-registration/hospital-list/hospital-list.component';
import { RegistrationhomeComponent } from './components/admin/hospital-registration/registration-home/registrationhome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponentsComponent } from './components/patient/home-components/home-components.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SelectAppointmentComponent } from './components/patient/select-appointment/select-appointment.component';
import { BookAppointmentComponent } from './components/patient/book-appointment/book-appointment.component';
import { HospitalmanagerComponent } from './components/hospitalmanager/hospitalmanager/hospitalmanager.component';
import { DoctorsComponent } from './components/hospitalmanager/doctors/doctors.component';
import { AdminsidebarComponent } from './components/common/adminsidebar/adminsidebar.component';
import { AddDoctorComponent } from './components/hospitalmanager/add-doctor/add-doctor.component';
import { SidenavComponent } from './components/admin/sidenav/sidenav.component';
import { LabAssistantRegistrationComponent } from './components/admin/lab-assistant-registration/lab-assistant-registration.component';
import { HosmanagerAcceptComponent } from './components/admin/hospital-manager-registration/hosmanager-accept/hosmanager-accept.component';
import { HosmanagerListComponent } from './components/admin/hospital-manager-registration/hosmanager-list/hosmanager-list.component';
import { LabAssistantAcceptComponent } from './components/admin/lab-assistant-registration/lab-assistant-accept/lab-assistant-accept.component';
import { LabAssistantListComponent } from './components/admin/lab-assistant-registration/lab-assistant-list/lab-assistant-list.component';
import { HospitalManagerRegistrationComponent } from './components/admin/hospital-manager-registration/hospital-manager-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHospitalmanagerComponent,
    HeaderComponent,
    TopnavComponent,
    FooterComponent,
    HomepgComponent,
    ImageSliderComponent,
    RegisterComponent,
    HospitalListComponent,
    RegistrationhomeComponent,
    HospitalmanagerComponent,
    DoctorsComponent,
    AdminsidebarComponent,
    AddDoctorComponent,
    HomeComponentsComponent,
    SelectAppointmentComponent,
    BookAppointmentComponent,
    SidenavComponent,
    LabAssistantRegistrationComponent,
    HospitalManagerRegistrationComponent,
    HosmanagerAcceptComponent,
    HosmanagerListComponent,
    LabAssistantAcceptComponent,
    LabAssistantListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
