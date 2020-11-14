import { Injectable } from '@angular/core';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ContactIdService {
  constructor() { }

  get() {
    return v4();
  }
}
