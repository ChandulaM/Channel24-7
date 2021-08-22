import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCheck, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';
import { HospitalManagerService } from 'src/app/services/hospital-manager.service';

@Component({
  selector: 'app-hosmanager-accept',
  templateUrl: './hosmanager-accept.component.html',
  styleUrls: ['./hosmanager-accept.component.css'],
})
export class HosmanagerAcceptComponent implements OnInit {
  faAccept = faCheck;
  faReject = faTimes;
  pendingManagers: any;
  selectedManager: any;
  numberOfRequests: any;
  pageNo: number = 1;
  isLoading: boolean = false;

  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private managerService: HospitalManagerService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getPendingRequests();
  }

  getPendingRequests() {
    this.managerService.getPendingManagers().subscribe((data) => {
      this.pendingManagers = data;
      this.numberOfRequests = data.length;
      this.selectedManager = data[0];
      this.isLoading = false;
    });
  }

  onViewModal(hospitalManager: any): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#acceptOrRejectModal');
    container?.appendChild(button);
    this.selectedManager = hospitalManager;
    button.click();
  }

  onAccept() {
    this.selectedManager.status = 'active';
    this.managerService
      .acceptOrRejectManagerRequest(this.selectedManager)
      .subscribe(
        (data) => {
          alert('Request accepted');
          document.getElementById('modalCloseBtn')?.click();
          this.dataChange.emit();
        },
        (err) => alert(err)
      );
  }

  onReject() {
    this.selectedManager.status = 'rejected';
    this.managerService
      .acceptOrRejectManagerRequest(this.selectedManager)
      .subscribe(
        (data) => {
          alert('Request was rejected');
          document.getElementById('modalCloseBtn')?.click();
          this.getPendingRequests();
        },
        (err) => alert(err)
      );
  }
}
