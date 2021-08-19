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
import { SidenavComponent } from './components/admin/sidenav/sidenav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchAppoinment1Component } from './components/patient/homepgComponents/search-appoinment1.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HospitalmanagerComponent } from './components/hospitalmanager/hospitalmanager/hospitalmanager.component';
import { DoctorsComponent } from './components/hospitalmanager/doctors/doctors.component';
import { AdminsidebarComponent } from './components/common/adminsidebar/adminsidebar.component';
import { AddDoctorComponent } from './components/hospitalmanager/add-doctor/add-doctor.component';

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
    SearchAppoinment1Component,
    HospitalmanagerComponent,
    DoctorsComponent,
    AdminsidebarComponent,
    AddDoctorComponent,
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
