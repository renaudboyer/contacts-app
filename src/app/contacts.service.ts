import { Injectable } from '@angular/core';
import { Contact } from "./Contact";
import { ContactIdService } from "./contact-id.service";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [
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

  constructor(private contactIdService: ContactIdService) { }

  createNewEvent():Contact {
    return {
      id: null,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@test.com'
    };
  }

  getList() {
    return this.contacts
  }

  addOrModify(contact: Contact) {
    if (contact.id) {
      this.update(contact);
    } else {
      this.add(contact);
    }
  }

  add(contact: Contact) {
    contact.id = this.contactIdService.get();

    this.contacts.push(contact);
  }

  update(contact: Contact) {
    const index = this.contacts.findIndex(c => c.id === contact.id);

    this.contacts.splice(index, 1, contact);
  }

  delete(contact: Contact) {
    const index = this.contacts.findIndex(c => c.id === contact.id);

    this.contacts.splice(index, 1);
  }
}
