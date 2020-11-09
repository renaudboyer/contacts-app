import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contact-detail',
  template: `
    <div>
      <div>email: {{ contact.email }}</div>
      <div>First Name: {{ contact.firstName }}</div>
      <div>Last Name: {{ contact.lastName }}</div>
      <div>email: {{ contact.email }}</div>
    </div>
  `,
  styles: [
  ]
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
