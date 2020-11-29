import { Component, OnInit } from '@angular/core';
import {Contact} from "./Contact";
import {ContactsService} from "./contacts.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'cnt-contact-edit',
  template: `
      <cnt-contact-form *ngIf="!loading" [contact]="contact"></cnt-contact-form>
  `,
  styles: [
  ]
})
export class ContactEditComponent implements OnInit {
  contact: Contact;
  loading: boolean = true;

  constructor(private contactService: ContactsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loading = true;
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('contactId');

      if (id) {
        this.contact = this.contactService.get(id);
      }

      this.loading = false;
    });
  }
}
