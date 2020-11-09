import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "./Contact";

@Component({
  selector: 'cnt-contact',
  template: `
    <span [class.selected]="selected">
      {{ contact.firstName | titlecase }} {{ contact.lastName | uppercase }} - {{ contact.email | lowercase }}
    </span>
  `,
  styles: ['span.selected { background: lightgray }']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
