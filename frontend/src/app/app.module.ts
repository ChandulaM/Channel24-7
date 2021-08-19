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
import { HospitalmanagerComponent } from './components/hospitalmanager/hospitalmanager/hospitalmanager.component';
import { DoctorsComponent } from './components/hospitalmanager/doctors/doctors.component';
import { AdminsidebarComponent } from './components/common/adminsidebar/adminsidebar.component';
import { AddDoctorComponent } from './components/hospitalmanager/add-doctor/add-doctor.component';
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
