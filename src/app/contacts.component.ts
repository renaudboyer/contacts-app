import { Component, OnInit } from '@angular/core';
import { Contact } from "./Contact";
import { ContactsService } from "./contacts.service";

@Component({
  selector: 'cnt-contacts',
  template: `
    <h3>Number of contacts: {{ contacts.length }}</h3>
    <cnt-contact-form *ngIf="displayForm" [contact]="editedContact" (modifyContact)="modifyContact($event)"
    ></cnt-contact-form>
    <button (click)="addContact()" [disabled]="displayForm">Add</button>
    <ul>
      <li *ngFor="let currentContact of contacts">
        <cnt-contact
            (click)="selectContact(currentContact)"
            [contact]="currentContact"
            [selected]="selectedContact === currentContact"
        >
        </cnt-contact>
        <button (click)="editContact(currentContact)" [disabled]="displayForm">Edit</button>
        <button (click)="deleteContact(currentContact)" [disabled]="displayForm">Delete</button>
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
  contacts;
  displayForm = false;

  constructor(private contactsService: ContactsService) {
    this.contacts = contactsService.getList();
  }

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
    this.contactsService.delete(currentContact);
  }

  editContact(currentContact: Contact) {
    this.openForm();
    this.editedContact = Object.assign({}, currentContact);
  }

  closeForm() {
    this.displayForm = false;
  }

  openForm() {
    this.displayForm = true;
  }

  addContact() {
    this.openForm();
  }

  modifyContact(contact: Contact) {
    this.contactsService.addOrModify(contact);

    this.closeForm();
  }
}
