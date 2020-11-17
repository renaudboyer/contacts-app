import { Component, OnInit } from '@angular/core';
import {Contact} from "./Contact";
import {ContactsService} from "./contacts.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'cnt-contact-list',
  template: `
      <h3>Number of contacts: {{ (contacts | async).length }}</h3>
      <button (click)="addContact()" [disabled]="displayForm">Add</button>
      <ul>
          <li *ngFor="let currentContact of contacts | async">
              <cnt-contact
                      (click)="selectContact(currentContact)"
                      [contact]="currentContact"
                      [selected]="selectedContact === currentContact"
              >
              </cnt-contact>
              <button (click)="editContact(currentContact)" [disabled]="displayForm">Edit</button>
              <button (click)="deleteContact(currentContact)" [disabled]="displayForm">Delete</button>
          </li>
      </ul>
  `,
  styles: [
  ]
})
export class ContactListComponent implements OnInit {
  selectedContact: Contact;
  editedContact: Contact;
  contacts: Observable<Array<Contact>>;
  displayForm = false;

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit(): void {
    this.contacts = this.contactsService.getList();
  }

  selectContact(contact: Contact) {
    this.router.navigate(['contacts', contact.id]);
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
