import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SampleServiceService } from '../../sample-service.service';

@Component({
  selector: 'app-lab-assistant-accept',
  templateUrl: './lab-assistant-accept.component.html',
  styleUrls: ['./lab-assistant-accept.component.css'],
})
export class LabAssistantAcceptComponent implements OnInit {
  faAccept = faCheck;
  faReject = faTimes;
  pendingRequests: any;
  numberOfRequests: any;
  pageNo: number = 1;
  selectedRequest!: any;

  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private sample: SampleServiceService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.pendingRequests = this.sample.getPending();
    this.numberOfRequests = this.pendingRequests.length;
    this.selectedRequest = this.pendingRequests[0];
  }

  onViewModal(request: any): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#acceptOrRejectModal');
    container?.appendChild(button);
    button.click();
    this.selectedRequest = request;
  }

  onAccept() {
    this.sample.acceptRequest(this.selectedRequest.id);
    this.pendingRequests = this.sample.getPending();
    this.dataChange.emit(this.sample.getRegistered());
  }
}
