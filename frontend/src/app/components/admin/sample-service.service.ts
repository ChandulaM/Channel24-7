import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SampleServiceService {
  registeredLabAssistants = [
    {
      id: 1,
      name: 'Tom Hidgins',
      email: 'tom@gmail.com',
      lab: 'Durdans Laboratories Colombo',
    },
    {
      id: 2,
      name: 'Jenna Merkle',
      email: 'jenna@gmail.com',
      lab: 'Royal Labs Negombo',
    },
    {
      id: 3,
      name: 'Bobby Boone',
      email: 'bobbybob@gmail.com',
      lab: "Bobby's Booby Labs",
    },
    {
      id: 4,
      name: 'Ralph Suzanne',
      email: 'ralphSuz@gmail.com',
      lab: 'MetLab Labs',
    },
    {
      id: 10,
      name: 'Avonlea Shannah',
      email: 'avalon@gmail.com',
      lab: 'Durdans Laboratories Kandy',
    },
    {
      id: 11,
      name: 'Apple Juice',
      email: 'applejuicegud@gmail.com',
      lab: 'Beriberi Research Center',
    },
    {
      id: 12,
      name: 'Kegan Eden',
      email: 'keganisawesome@gmail.com',
      lab: 'Goodwill Medilab',
    },
    {
      id: 69,
      name: 'Roydon Makayla',
      email: 'makymakayla@gmail.com',
      lab: 'Wayamba Lab Center',
    },
  ];

  pendingLabAssistants = [
    {
      id: 5,
      name: 'Cranky Brook',
      email: 'crankypanky@gmail.com',
      lab: 'Matlabs Kandy',
    },
    {
      id: 8,
      name: 'Can Dis',
      email: 'candisdikfitinyomouth@gmail.com',
      lab: 'Unusual Laboratories Group Matale',
    },
  ];

  constructor() {}

  getRegistered(): any {
    return this.registeredLabAssistants;
  }

  getPending(): any {
    return this.pendingLabAssistants;
  }

  acceptRequest(id: number): void {
    const acceptedList = this.pendingLabAssistants.filter(
      (labAssistant) => labAssistant.id == id
    );
    this.pendingLabAssistants = this.pendingLabAssistants.filter(
      (labAssistant) => labAssistant.id != id
    );
    this.registeredLabAssistants.push(acceptedList[0]);
  }

  rejectRequest(id: number): any {
    this.pendingLabAssistants = this.pendingLabAssistants.filter(
      (labAssistant) => labAssistant.id != id
    );
  }
}
