import { Component, OnInit } from '@angular/core';
import { Contact } from "./Contact";

@Component({
  selector: 'cnt-contacts',
  template: `
    <h3>Number of contacts: {{ contacts.length }}</h3>
    <form *ngIf="editedContact" (ngSubmit)="closeForm()">
      <label>Id:
        <input name="id" [(ngModel)]="editedContact.id" >
      </label>
      <label>First Name:
        <input name="firstname" [(ngModel)]="editedContact.firstName">
      </label>
      <label>Last Name:
        <input name="lastname" [(ngModel)]="editedContact.lastName">
      </label>
      <label>Email:
        <input name="email" [(ngModel)]="editedContact.email">
      </label>
      <button type="submit">Close</button>
    </form>
    <ul>
      <li *ngFor="let currentContact of contacts">
        <cnt-contact
            (click)="selectContact(currentContact)"
            [contact]="currentContact"
            [selected]="selectedContact === currentContact"
        >
        </cnt-contact>
        <button (click)="editContact(currentContact)">Edit</button>
        <button (click)="deleteContact(currentContact)">Delete</button>
        <cnt-contact-detail
            *ngIf="selectedContact === currentContact"
            [contact]="currentContact"
        ></cnt-contact-detail>
      </li>
    </ul>
  `,
  styles: ['form label { display: block }']
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  editedContact: Contact;

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

  deleteContact(currentContact: Contact) {
    const index = this.contacts.findIndex(c => c.id === currentContact.id);

    this.contacts.splice(index, 1);
  }

  editContact(currentContact: Contact) {
    this.editedContact = currentContact;
  }

  closeForm() {
    this.editedContact = null;
  }
}
