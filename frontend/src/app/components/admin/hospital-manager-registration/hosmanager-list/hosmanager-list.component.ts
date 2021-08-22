import { Component, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HospitalManagerService } from 'src/app/services/hospital-manager.service';

@Component({
  selector: 'app-hosmanager-list',
  templateUrl: './hosmanager-list.component.html',
  styleUrls: ['./hosmanager-list.component.css'],
})
export class HosmanagerListComponent implements OnInit {
  faSearch = faSearch;
  @Input() registeredManagers: any;
  numberOfManagers: any;
  pageNo: number = 1;
  isLoading: boolean = false;

  constructor(private managerService: HospitalManagerService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.managerService.getRegisteredManagers().subscribe((data) => {
      this.registeredManagers = data;
      this.numberOfManagers = data.length;
      this.isLoading = false;
    });
  }
}
