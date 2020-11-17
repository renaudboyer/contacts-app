import { Component, OnInit } from '@angular/core';
import { Contact } from "./Contact";
import { ContactsService } from "./contacts.service";
import { Observable } from "rxjs";

@Component({
  selector: 'cnt-contacts',
  template: `
<cnt-contact-list></cnt-contact-list>
  `,
  styles: []
})
export class ContactsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
}
