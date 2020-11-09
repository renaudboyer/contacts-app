import { Component, OnInit } from '@angular/core';
import { Contact } from "./Contact";

@Component({
  selector: 'cnt-contacts',
  template: `
    <h3>Number of contacts: {{ contacts.length }}</h3>
    <form *ngIf="editedContact" (ngSubmit)="closeForm()">
      <label>Id:
        <input name="id" [(ngModel)]="editedContact.id" required type="number">
      </label>
      <label>First Name:
        <input name="firstname" [(ngModel)]="editedContact.firstName" required>
      </label>
      <label>Last Name:
        <input name="lastname" [(ngModel)]="editedContact.lastName" required>
      </label>
      <label>Email:
        <input name="email" [(ngModel)]="editedContact.email" type="email" required>
      </label>
      <button type="submit">Close</button>
    </form>
    <button (click)="addContact()">Add</button>
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
  styles: [
      'form label { display: block }',
    'input.ng-invalid { background: lightcoral }'
  ]
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

  addContact() {
    const newContact: Contact = {
      id: 5,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@test.com'
    }

    this.contacts.push(newContact);
    this.editedContact = newContact;
  }
}
