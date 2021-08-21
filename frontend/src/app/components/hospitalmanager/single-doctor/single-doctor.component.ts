import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbTimeStruct, NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap'
import { Doctor } from 'src/app/models/Doctor';
import { Shedule, SheduleDTO } from 'src/app/models/Shedule';
import { SheduleServiceService } from 'src/app/services/shedule-service.service';

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

  constructor(private modelService: NgbModal, private sheduleService: SheduleServiceService) {
    this.doctor = JSON.parse(localStorage.getItem('doctor') || '{}')
    console.log(this.doctor)
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

  ngOnInit(): void {
    this.getAllShedules();
  }

  getAllShedules() {
    this.sheduleService.getDocShedules(this.doctor.doc_id).subscribe(res => {
      this.allShedules = res.results
      console.log(this.allShedules)
    })
  }

}
