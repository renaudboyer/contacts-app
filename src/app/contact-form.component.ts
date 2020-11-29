import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Contact} from "./Contact";
import {NgForm} from "@angular/forms";
import {ContactsService} from "./contacts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'cnt-contact-form',
  template: `
    <h3>{{ createMode ? 'Contact Creation' : 'Contact Modification' }}</h3>
    <form #formElement="ngForm" (ngSubmit)="modify(formElement)">
      <label>First Name:
        <input #inputFirstName name="firstname" [(ngModel)]="contact.firstName" required>
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
      <button routerLink="/">Back</button>
    </form>
  `,
  styles: [
    'form label { display: block }',
    'input.ng-valid { border-left: 10px solid green; }',
    'input.ng-invalid { border-left: 10px solid red; }'
  ]
})
export class ContactFormComponent implements OnInit, AfterViewInit {
  @Input() contact: Contact;

  @ViewChild('inputFirstName', { static: false }) inputFirstName: ElementRef<HTMLInputElement>;

  createMode = false;

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit(): void {
    if (!this.contact) {
      this.contact = this.contactsService.createNewEvent();
      this.createMode = true;
    }
  }

  ngAfterViewInit() {
    this.inputFirstName.nativeElement.focus();
  }

  modify(formElement: NgForm) {
    if (formElement.valid) {
      this.contactsService.addOrModify(this.contact);
      this.router.navigate(['/']);
    }
  }
}
