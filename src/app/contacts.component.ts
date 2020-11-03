import { Component, OnInit } from '@angular/core';
import { Contact } from "./Contact";

@Component({
  selector: 'cnt-contacts',
  template: `
      <h3>Number of contacts: {{ contactsNumber }}</h3>
    <ul>
      <li>
        {{ contact1.firstName }} {{ contact1.lastName }} - {{ contact1.email }}
      </li>
      <li>
        {{ contact2.firstName }} {{ contact2.lastName }} - {{ contact2.email }}
      </li>
      <li>
        {{ contact3.firstName }} {{ contact3.lastName }} - {{ contact3.email }}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {
  contactsNumber = 3;

  contact1: Contact = {
    id: 1,
    firstName: "Roberto",
    lastName: "Carlos",
    email: "robertocarlos@realmadrid.com"
  };
  contact2: Contact = {
    id: 2,
    firstName: "Rudy",
    lastName: "VOLLER",
    email: "rudyvoller@om.com"
  }
  contact3: Contact = {
    id: 3,
    firstName: "Jean-pierre",
    lastName: "Papin",
    email: "jeanpierrepapin@om.com"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
