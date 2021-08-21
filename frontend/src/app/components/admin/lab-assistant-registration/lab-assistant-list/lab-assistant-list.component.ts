import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SampleServiceService } from '../../sample-service.service';

@Component({
  selector: 'app-lab-assistant-list',
  templateUrl: './lab-assistant-list.component.html',
  styleUrls: ['./lab-assistant-list.component.css'],
})
export class LabAssistantListComponent implements OnInit {
  faSearch = faSearch;
  @Input() registeredAssistants: any;
  numberOfRequests: any;
  pageNo: number = 1;

  constructor(
    private service: SampleServiceService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.registeredAssistants = this.service.getRegistered();
    this.cdr.detectChanges();
    this.numberOfRequests = this.registeredAssistants.length;
  }
}
