import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css'],
})
export class ListDoctorsComponent implements OnInit {
  @Input() doctorList: Doctor[] = [];
  numberOfDoctors: any;
  pageNo: number = 1;
  isDoctorListEmpty: boolean = true;
  selectedDoctor: any;
  isDoctorSelected: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.selectedDoctor = this.fakeDoctor;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isDoctorListEmpty = this.doctorList.length == 0;
    this.numberOfDoctors = this.doctorList.length;
  }

  onSelectDoctor(doctor: Doctor) {
    const container = document.getElementById('list-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#singleDoctorModal');
    container?.appendChild(button);
    this.selectedDoctor = doctor;
    button.click();
  }

  fakeDoctor = {
    name: 'A',
    number: 'B',
    image: 'D',
    specialization: {
      name: 'D',
    },
  };
}
