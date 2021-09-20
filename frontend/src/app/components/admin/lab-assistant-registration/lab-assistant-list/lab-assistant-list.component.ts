import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
  numberOfAssistants: any;
  pageNo: number = 1;
  selectedAssistant: any;
  assistantsCopy: any[] = [];
  searchQuery: string = '';

  @Input() _registeredAssistants: any;

  constructor(private service: SampleServiceService) {}

  ngOnInit(): void {
    this.selectedAssistant = this._registeredAssistants[0];
    this.numberOfAssistants = this._registeredAssistants.length;
    this.sortArray();
    Object.assign(this.assistantsCopy, this._registeredAssistants);
  }

  sortArray() {
    this._registeredAssistants.sort((a: any, b: any) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this._registeredAssistants = changes._registeredAssistants.currentValue;
    this.sortArray();
    this.assistantsCopy = this._registeredAssistants;
    this.numberOfAssistants = this._registeredAssistants.length;
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
      'Are you sure you want to remove this lab assistant from the system?'
    );
    if (deleteAssistant) {
      const index = this._registeredAssistants.findIndex(
        (assistant: any) => assistant.id == this.selectedAssistant.id
      );
      this._registeredAssistants.splice(index, 1);
      this.numberOfAssistants -= 1;
    }
  }

  searchForAssistant() {
    if (this.searchQuery == '') {
      this._registeredAssistants = this.assistantsCopy;
    } else {
      const searchQuery = this.searchQuery.toLowerCase();
      this._registeredAssistants = this.assistantsCopy.filter(
        (assistant: any) =>
          assistant.name.toLowerCase().includes(searchQuery) ||
          assistant.lab.toLowerCase().includes(searchQuery)
      );
    }
    this.numberOfAssistants = this._registeredAssistants.length;
  }
}
