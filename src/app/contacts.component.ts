import { Component, OnInit } from '@angular/core';
import { Contact } from "./Contact";

@Component({
  selector: 'cnt-contacts',
  template: `
    <h3>Number of contacts: {{ contacts.length }}</h3>
    <ul>
      <li *ngFor="let currentContact of contacts">
        <cnt-contact
            (click)="selectContact(currentContact)"
            [contact]="currentContact"
            [selected]="selectedContact === currentContact"
        >
        </cnt-contact>
      </li>
    </ul>
  `,
  styles: []
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;

  contacts: Contact[] = [
    {
      id: 1,
      firstName: "Roberto",
      lastName: "Carlos",
      email: "robertocarlos@realmadrid.com"
    },
    {
      id: 2,
      firstName: "Rudy",
      lastName: "VOLLER",
      email: "rudyvoller@om.com"
    },
    {
      id: 3,
      firstName: "Jean-pierre",
      lastName: "Papin",
      email: "jeanpierrepapin@om.com"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectContact(contact: Contact) {
    if (this.selectedContact === contact) {
      this.selectedContact = null;
    } else {
      this.selectedContact = contact;
    }
  }
}
