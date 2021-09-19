import { Component, OnInit, Input } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HospitalManagerService } from 'src/app/services/hospital-manager.service';
import { HospitalManagerDTO } from 'src/app/models/HosptalManager';

@Component({
  selector: 'app-hosmanager-list',
  templateUrl: './hosmanager-list.component.html',
  styleUrls: ['./hosmanager-list.component.css'],
})
export class HosmanagerListComponent implements OnInit {
  faSearch = faSearch;
  faTimes = faTimes;
  @Input() registeredManagers: any;
  numberOfManagers: any;
  pageNo: number = 1;
  isLoading: boolean = false;
  selectedManager: any;

  constructor(private managerService: HospitalManagerService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.managerService.getRegisteredManagers().subscribe((data) => {
      this.registeredManagers = data;
      this.numberOfManagers = data.length;
      this.isLoading = false;
      this.selectedManager = data[0];
    });
  }

  onSelectManager(manager: any) {
    const container = document.getElementById('list-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#viewManagerModal');
    container?.appendChild(button);
    this.selectedManager = manager;
    button.click();
  }

  removeHospitalManager() {
    const deleteManager = confirm(
      'Are you sure you want to remove this hospital manager from the system?'
    );
    if (deleteManager) {
      this.selectedManager.status = 'removed';
      this.managerService
        .acceptOrRejectManagerRequest(this.selectedManager)
        .subscribe((response) => {
          if (response.status == 200) {
            alert('Hospital Manager Removed Successfully');
            this.removeManagerFromList();
          } else {
            alert('Hospital Manager could not be removed! Error!');
          }
        });
    }
  }

  removeManagerFromList() {
    const index = this.registeredManagers.findIndex(
      (manager: HospitalManagerDTO) =>
        manager.user_id == this.selectedManager.user_id
    );
    this.registeredManagers.splice(index, 1);
  }
}
