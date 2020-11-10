import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactIdService {
  sequence = 4;

  constructor() { }

  get() {
    return this.sequence++;
  }
}
