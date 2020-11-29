import { Component, OnInit } from '@angular/core';
import {Contact} from "./Contact";
import {ContactsService} from "./contacts.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'cnt-contact-list',
  template: `
      <h3>Number of contacts: {{ (contacts | async).length }}</h3>
      <button (click)="addContact()">Add</button>
      <ul>
          <li *ngFor="let currentContact of contacts | async">
              <cnt-contact
                      (click)="selectContact(currentContact)"
                      [contact]="currentContact"
                      [selected]="selectedContact === currentContact"
              >
              </cnt-contact>
              <button (click)="editContact(currentContact)">Edit</button>
              <button (click)="deleteContact(currentContact)">Delete</button>
          </li>
      </ul>
  `,
  styles: [
  ]
})
export class ContactListComponent implements OnInit {
  selectedContact: Contact;
  contacts: Observable<Array<Contact>>;

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
    this.router.navigate(['contacts', currentContact.id, 'edit']);
  }

  addContact() {
    this.router.navigate(['contacts', 'new']);
  }
}
