import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faEdit,
  faCheck,
  faTrash,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Hospital } from 'src/app/models/Hospital';
import { HospitalServiceService } from 'src/app/services/hospital-service.service';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css'],
})
export class HospitalListComponent implements OnInit {
  faSearch = faSearch;
  faEdit = faEdit;
  faCheck = faCheck;
  faTrash = faTrashAlt;
  registeredHospitals: Hospital[] = [];
  numberOfHospitals: any;
  pageNo: number = 1;
  hospitalToEdit: Hospital = new Hospital();

  constructor(private hospitalService: HospitalServiceService) {}

  ngOnInit(): void {
    this.getAllRegisteredHospitals();
  }

  getAllRegisteredHospitals(): void {
    this.hospitalService.getAllHospitals().subscribe((hospitals) => {
      this.registeredHospitals = hospitals;
      this.numberOfHospitals = hospitals.length;
    });
  }

  onOpenModal(hospital: Hospital): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#editmodal');
    container?.appendChild(button);
    button.click();
    this.hospitalToEdit = hospital;
  }

  onSaveChanges(): void {
    this.hospitalService.updateHospitaleDetais(this.hospitalToEdit).subscribe(
      (res) => {
        if (res) {
          alert('Information Updated');
          this.closeModal();
        }
      },
      (err) => alert('Error while updating')
    );
  }

  onRemoveHospital() {
    const confirmation = confirm(
      'Are you sure you want to remove this hospital?'
    );
    if (confirmation) {
      this.hospitalToEdit.status = 'inactive';
      this.hospitalService.updateHospitaleDetais(this.hospitalToEdit).subscribe(
        (res) => {
          alert('Hospital removed successfully');
          this.getAllRegisteredHospitals();
        },
        (err) => {
          alert('Error while removing hospital');
        }
      );
      this.closeModal();
    }
  }

  closeModal(): void {
    const modalToClose = document.getElementById('editmodal');
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.style.display = 'none';
    closeBtn.setAttribute('data-bs-dismiss', 'modal');
    modalToClose?.appendChild(closeBtn);
    closeBtn.click();
  }
}
