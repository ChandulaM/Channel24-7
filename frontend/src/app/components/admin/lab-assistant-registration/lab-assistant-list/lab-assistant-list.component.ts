import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SampleServiceService } from '../../sample-service.service';

@Component({
  selector: 'app-lab-assistant-list',
  templateUrl: './lab-assistant-list.component.html',
  styleUrls: ['./lab-assistant-list.component.css'],
})
export class LabAssistantListComponent implements OnInit {
  faSearch = faSearch;
  faTimes = faTimes;
  @Input() registeredAssistants: any;
  numberOfAssistants: any;
  pageNo: number = 1;
  selectedAssistant: any;
  assistantsCopy: any[] = [];
  searchQuery: string = '';

  constructor(
    private service: SampleServiceService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.selectedAssistant = this.registeredAssistants[0];
    this.registeredAssistants = this.service.getRegistered();
    this.numberOfAssistants = this.registeredAssistants.length;
    Object.assign(this.assistantsCopy, this.registeredAssistants);
  }

  onSelectAssistant(assistant: any) {
    const container = document.getElementById('list-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#viewAssistantModal');
    container?.appendChild(button);
    this.selectedAssistant = assistant;
    button.click();
  }

  removeAssistant() {
    const deleteAssistant = confirm(
      'Are you sure you want to remove this hospital manager from the system?'
    );
    if (deleteAssistant) {
      const index = this.registeredAssistants.findIndex(
        (assistant: any) => assistant.id == this.selectedAssistant.id
      );
      this.registeredAssistants.splice(index, 1);
    }
  }

  searchForAssistant() {
    if (this.searchQuery == '') {
      this.registeredAssistants = this.assistantsCopy;
    } else {
      const searchQuery = this.searchQuery.toLowerCase();
      this.registeredAssistants = this.assistantsCopy.filter(
        (assistant: any) =>
          assistant.name.toLowerCase().includes(searchQuery) ||
          assistant.lab.toLowerCase().includes(searchQuery)
      );
    }
  }
}
