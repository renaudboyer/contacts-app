import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contact',
  template: `
    <span>
      {{ contact.firstName }} {{ contact.lastName }} - {{ contact.email }}
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
