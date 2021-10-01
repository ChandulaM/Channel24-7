import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbTimeStruct, NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap'
import { Doctor, DoctorDTO } from 'src/app/models/Doctor';
import { Shedule, SheduleDTO } from 'src/app/models/Shedule';
import { Specialization } from 'src/app/models/Specialization';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { SheduleServiceService } from 'src/app/services/shedule-service.service';
import { SpecializationServiceService } from 'src/app/services/specialization-service.service'
import { NotifierService } from 'angular-notifier'
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';

declare var $:any;

@Component({
  selector: 'app-single-doctor',
  templateUrl: './single-doctor.component.html',
  styleUrls: ['./single-doctor.component.css'],
 })
export class SingleDoctorComponent implements OnInit {

  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};

  public allShedules: Array<Shedule> = [];

  public doctor;

  public dateTime = '';

  public specializations: any = [];

  public specializationList: any = [];

  phone_number = '';
  name_text = '';
  speciality_text = '100';
  description = '';


  showUpdateAlert: boolean = true;
  updateLoading: boolean = true;

  private notifier: NotifierService;

  constructor(private modelService: NgbModal, private sheduleService: SheduleServiceService, private doctorService: DoctorServiceService, private specializationService: SpecializationServiceService, private notifierService: NotifierService) {
    this.doctor = JSON.parse(localStorage.getItem('doctor') || '{}')
    console.log(this.doctor)
    this.phone_number = this.doctor.number
    this.name_text = this.doctor.name
    this.speciality_text = this.doctor.specialization.specialization_id
    this.description = this.doctor.description
    this.notifier = notifierService
  }

  public openModal(content: any) {
    this.modelService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true})
  }

  addShedule() {

    const shedule: SheduleDTO = {
      sheduleTime: this.dateTime,
      doctor_id: Number.parseInt(this.doctor.doc_id)
    }

    console.log(shedule)

    this.sheduleService.addShedule(shedule).subscribe(res => {
      console.log(res)
      this.getAllShedules()
    })

  }

  updateSheduleStatus(event: any) {
    console.log(event.currentTarget.checked)
  }

  ngOnInit(): void {
    this.getAllShedules();
    this.specializationService.getAllSpecializations().subscribe(res => {
     console.log('specia',res)
     this.specializations = res.result.filter((name: string) => {return name!==this.doctor.specialization.name})
    });
    //this.getSingleDoctor();
    
  }


  setSelectedSpecialization() {

  }

  updateDoctor() {
    this.showUpdateAlert = false
    this.updateLoading = false

    const update_doctor: DoctorDTO = {
      name: this.name_text,
      number: this.phone_number,
      image: this.doctor.image,
      specialization_id: Number.parseInt(this.speciality_text),
      hospital_id: this.doctor.hospital.hospitalId,
      description: this.description
    }

    console.log('updating',update_doctor)

    this.doctorService.updateDoctor(update_doctor, this.doctor.doc_id).subscribe(res => {
      console.log(res.results)
    })

    setTimeout(() => {
      this.showUpdateAlert = true
    },1000)

  }


  getSingleDoctor() {
   this.doctorService.getDoctorById(this.doctor.doc_id).subscribe(res => {
     console.log(res)
     this.doctor = res.results
   })
  }

  getAllShedules() {
    this.sheduleService.getDocShedules(this.doctor.doc_id).subscribe(res => {
      this.allShedules = res.results
      console.log(this.allShedules)
    })
  }

}
