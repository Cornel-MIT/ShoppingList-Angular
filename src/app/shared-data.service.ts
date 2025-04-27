import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  constructor() { }

  userData = {
    id : 1,
    name : 'Joe',
    username : 'Joie',
    email : 'joeg@gmail.com',
    subsciption : 'basic'
  }

  isEligibleForSubscription() {
    if (this.userData.subsciption == 'basic' && this.userData.email.endsWith('@gmail.com')) {
       return true;
    } else {
      return false;
    }
  }
}
