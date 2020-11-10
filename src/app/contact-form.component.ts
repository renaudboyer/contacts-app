import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "./Contact";
import {NgForm} from "@angular/forms";
import {ContactsService} from "./contacts.service";

@Component({
  selector: 'cnt-contact-form',
  template: `
    <h3>{{ createMode ? 'Contact Creation' : 'Contact Modification' }}</h3>
    <form #formElement="ngForm" (ngSubmit)="modify(formElement)">
      <label>First Name:
        <input name="firstname" [(ngModel)]="contact.firstName" required>
      </label>
      <label>Last Name:
        <input name="lastname" [(ngModel)]="contact.lastName" required>
      </label>
      <label>Email:
        <input name="email" type="email" [(ngModel)]="contact.email" required>
      </label>
      <input
          type="submit"
          [disabled]="formElement.invalid"
          value="{{createMode ? 'Create' : 'Modify'}}">        
    </form>
  `,
  styles: [
    'form label { display: block }',
    'input.ng-valid { border-left: 10px solid green; }',
    'input.ng-invalid { border-left: 10px solid red; }'
  ]
})
export class ContactFormComponent implements OnInit {
  @Input() contact: Contact;
  @Output() modifyContact = new EventEmitter<Contact>()

  createMode = false;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    if (!this.contact) {
      this.contact = this.contactsService.createNewEvent();
      this.createMode = true;
    }
  }

  modify(formElement: NgForm) {
    if (formElement.valid) {
      this.modifyContact.emit(this.contact);
    }
  }
}
