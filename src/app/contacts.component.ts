import { Component, OnInit } from '@angular/core';
import { Contact } from "./Contact";

@Component({
  selector: 'cnt-contacts',
  template: `
    <h3>Number of contacts: {{ contacts.length }}</h3>
    <cnt-contact-form 
        [contact]="editedContact"
        (modifyContact)="modifyContact($event)"
    ></cnt-contact-form>
    <button (click)="addContact()" [disabled]="!!editedContact">Add</button>
    <ul>
      <li *ngFor="let currentContact of contacts">
        <cnt-contact
            (click)="selectContact(currentContact)"
            [contact]="currentContact"
            [selected]="selectedContact === currentContact"
        >
        </cnt-contact>
        <button (click)="editContact(currentContact)" [disabled]="!!editedContact">Edit</button>
        <button (click)="deleteContact(currentContact)" [disabled]="!!editedContact">Delete</button>
        <cnt-contact-detail
            *ngIf="selectedContact === currentContact"
            [contact]="currentContact"
        ></cnt-contact-detail>
      </li>
    </ul>
  `,
  styles: []
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
    this.editedContact = Object.assign({}, currentContact);
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

    this.editedContact = newContact;
  }

  modifyContact(contact: Contact) {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      this.contacts.splice(index, 1, contact);
    } else {
      this.contacts.push(contact);
    }

    this.closeForm();
  }
}
