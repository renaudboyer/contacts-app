import { Injectable } from '@angular/core';
import { Contact } from "./Contact";
import { ContactIdService } from "./contact-id.service";
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Array<Contact> = [];
  contactApiUrl = environment.apiUrl + 'contacts/';

  constructor(private contactIdService: ContactIdService, private http: HttpClient) {
    this.http.get<Array<Contact>>(this.contactApiUrl)
        .subscribe(contacts => {
          this.contacts.push(...contacts);
        });
  }

  createNewEvent():Contact {
    return {
      id: null,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@test.com'
    };
  }

  getList() {
    return this.contacts;
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

    this.http.post(this.contactApiUrl, contact)
        .subscribe(() => {
          this.contacts.push(contact);
        });
  }

  update(contact: Contact) {
    this.http.put(`${this.contactApiUrl}/${contact.id}`, contact)
        .subscribe(() => {
          const index = this.contacts.findIndex(c => c.id === contact.id);

          this.contacts.splice(index, 1, contact);
        });
  }

  delete(contact: Contact) {
    this.http.delete(`${this.contactApiUrl}/${contact.id}`)
        .subscribe(() => {
          const index = this.contacts.findIndex(c => c.id === contact.id);

          this.contacts.splice(index, 1);
        });
  }
}
