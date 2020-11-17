import { Component, OnInit } from '@angular/core';
import { Contact } from "./Contact";
import {ContactsService} from "./contacts.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'cnt-contact-display',
  template: `
    <cnt-contact-detail [contact]="contact"></cnt-contact-detail>
    <button routerLink="/">Back</button>
  `,
  styles: [
  ]
})
export class ContactDisplayComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactsService, private route: ActivatedRoute)
  {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('contactId');

      this.contact = this.contactService.get(id);
    });
  }
}
