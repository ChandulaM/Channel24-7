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
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { SingleDoctorComponent } from './components/hospitalmanager/single-doctor/single-doctor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorServiceService } from './services/doctor-service.service';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RegisterHospitalmanagerComponent } from './components/hospitalmanager/register-hospitalmanager/register-hospitalmanager.component';
import { SheduleServiceService } from './services/shedule-service.service';
import { SidenavComponent } from './components/admin/sidenav/sidenav.component';
import { LoginComponent } from './components/labassistant/login/login.component';
import { NevbarComponent } from './components/labassistant/common/nevbar/nevbar.component';
import { SignupComponent } from './components/labassistant/signup/signup.component';
import { DashboardComponent } from './components/labassistant/dashboard/dashboard.component';
import { MaindhashboardComponent } from './components/labassistant/maindhashboard/maindhashboard.component';
import { AddlabtestComponent } from './components/labassistant/addlabtest/addlabtest.component';
import { ManageappoinemtnsComponent } from './components/labassistant/manageappoinemtns/manageappoinemtns.component';
import { ManageresultsComponent } from './components/labassistant/manageresults/manageresults.component';
import { ManagetestsComponent } from './components/labassistant/managetests/managetests.component';
import { ReportdashboardComponent } from './components/labassistant/reportdashboard/reportdashboard.component';
import { ReportdeliveryComponent } from './components/labassistant/reportdelivery/reportdelivery.component';
import { ReportdemandComponent } from './components/labassistant/reportdemand/reportdemand.component';
import { UpdatelabtestComponent } from './components/labassistant/updatelabtest/updatelabtest.component';
import { UploadresultComponent } from './components/labassistant/uploadresult/uploadresult.component';
import { UploadresultenquryComponent } from './components/labassistant/uploadresultenqury/uploadresultenqury.component';
import { LabAssistantRegistrationComponent } from './components/admin/lab-assistant-registration/lab-assistant-registration.component';
import { HosmanagerAcceptComponent } from './components/admin/hospital-manager-registration/hosmanager-accept/hosmanager-accept.component';
import { HosmanagerListComponent } from './components/admin/hospital-manager-registration/hosmanager-list/hosmanager-list.component';
import { LabAssistantAcceptComponent } from './components/admin/lab-assistant-registration/lab-assistant-accept/lab-assistant-accept.component';
import { LabAssistantListComponent } from './components/admin/lab-assistant-registration/lab-assistant-list/lab-assistant-list.component';
import { HospitalManagerRegistrationComponent } from './components/admin/hospital-manager-registration/hospital-manager-registration.component';
import { PatientDetailsComponent } from './components/patient/patient-details/patient-details.component';
import { PatientCheckOutComponent } from './components/patient/patient-check-out/patient-check-out.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';
import { MyAppointmentsComponent } from './components/patient/my-appointments/my-appointments.component';
import { TopNavLoggedComponent } from './components/patient/commons/top-nav-logged/top-nav-logged.component';
import { HomePgLoggedComponent } from './components/patient/home-pg-logged/home-pg-logged.component';
import { SearchDocsComponent } from './components/patient/search-docs/search-docs.component';
import { HospitalManagerServiceService } from './services/hospital-manager-service.service';
import { SpecializationServiceService } from './services/specialization-service.service';

import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';

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
    SidenavComponent,
    HospitalmanagerComponent,
    DoctorsComponent,
    AdminsidebarComponent,
    AddDoctorComponent,
    SingleDoctorComponent,
    RegisterHospitalmanagerComponent,
    HomeComponentsComponent,
    SelectAppointmentComponent,
    BookAppointmentComponent,
    SidenavComponent,
    LoginComponent,
    NevbarComponent,
    SignupComponent,
    DashboardComponent,
    MaindhashboardComponent,
    AddlabtestComponent,
    ManageappoinemtnsComponent,
    ManageresultsComponent,
    ManagetestsComponent,
    ReportdashboardComponent,
    ReportdeliveryComponent,
    ReportdemandComponent,
    UpdatelabtestComponent,
    UploadresultComponent,
    UploadresultenquryComponent,
    LabAssistantRegistrationComponent,
    HospitalManagerRegistrationComponent,
    HosmanagerAcceptComponent,
    HosmanagerListComponent,
    LabAssistantAcceptComponent,
    LabAssistantListComponent,
    PatientDetailsComponent,
    PatientCheckOutComponent,
    PatientProfileComponent,
    MyAppointmentsComponent,
	TopNavLoggedComponent,
    HomePgLoggedComponent,
    SearchDocsComponent,
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
    CommonModule,
    NgbModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig, "cloud"),
    NgxSpinnerModule,
    
  ],
  providers: [DoctorServiceService,SheduleServiceService, HospitalManagerServiceService, SpecializationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
