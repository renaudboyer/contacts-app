import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contact',
  template: `
    <span>
      {{ contact.firstName | titlecase }} {{ contact.lastName | uppercase }} - {{ contact.email | lowercase }}
    </span>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
