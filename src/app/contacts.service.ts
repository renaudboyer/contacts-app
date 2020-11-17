import { Injectable } from '@angular/core';
import { Contact } from "./Contact";
import { ContactIdService } from "./contact-id.service";
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactSubject: BehaviorSubject<Array<Contact>> = new BehaviorSubject<Array<Contact>>([]);
  contactApiUrl = environment.apiUrl + 'contacts/';

  constructor(private contactIdService: ContactIdService, private http: HttpClient) {
    this.http.get<Array<Contact>>(this.contactApiUrl)
        .subscribe(contacts => {
          this.contactSubject.next(contacts);
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
    return this.contactSubject.asObservable();
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
          const contactsTab = this.contactSubject.getValue()
          contactsTab.push(contact);

          this.contactSubject.next(contactsTab);
        });
  }

  update(contact: Contact) {
    this.http.put(`${this.contactApiUrl}/${contact.id}`, contact)
        .subscribe(() => {
          const contactsTab = this.contactSubject.getValue()
          const index = contactsTab.findIndex(c => c.id === contact.id);

          contactsTab.splice(index, 1, contact);

          this.contactSubject.next(contactsTab);
        });
  }

  delete(contact: Contact) {
    this.http.delete(`${this.contactApiUrl}/${contact.id}`)
        .subscribe(() => {
          const contactsTab = this.contactSubject.getValue()
          const index = contactsTab.findIndex(c => c.id === contact.id);

          contactsTab.splice(index, 1);

          this.contactSubject.next(contactsTab);
        });
  }

  get(id: string) {
    const contactsList = this.contactSubject.getValue();

    return contactsList.find(contact => contact.id = id);
  }
}
