import { Component, OnInit } from '@angular/core';
import { Contact } from "./Contact";
import { ContactsService } from "./contacts.service";
import { Observable } from "rxjs";

@Component({
  selector: 'cnt-contacts',
  template: `          
    <header><h1>Contacts App</h1></header>
    <router-outlet></router-outlet>
    <footer>(c) 2020</footer>
  `,
  styles: []
})
export class ContactsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
}
