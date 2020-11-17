import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail.component';
import {FormsModule} from "@angular/forms";
import { ContactFormComponent } from './contact-form.component';
import { HttpClientModule } from "@angular/common/http";
import { ContactListComponent } from './contact-list.component';
import { AppRoutingModule } from "./app-routing.module";
import { ContactDisplayComponent } from './contact-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactDisplayComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
