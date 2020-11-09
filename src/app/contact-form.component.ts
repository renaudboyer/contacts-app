import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "./Contact";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'cnt-contact-form',
  template: `
    <form *ngIf="contact" #formElement="ngForm" (ngSubmit)="modify(formElement)">
      <label>Id:
        <input name="id" [(ngModel)]="contact.id" required type="number">
      </label>
      <label>First Name:
        <input name="firstname" [(ngModel)]="contact.firstName" required>
      </label>
      <label>Last Name:
        <input name="lastname" [(ngModel)]="contact.lastName" required>
      </label>
      <label>Email:
        <input name="email" type="email" [(ngModel)]="contact.email" required>
      </label>
      <input type="submit" [disabled]="formElement.invalid" value="Modify">        
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

  constructor() { }

  ngOnInit(): void {
  }

  modify(formElement: NgForm) {
    if (formElement.valid) {
      this.modifyContact.emit(this.contact);
    }
  }
}
