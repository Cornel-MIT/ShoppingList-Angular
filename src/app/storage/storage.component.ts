import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss'
})
export class StorageComponent {
  
  constructor(private cookie : CookieService) {}

  sessionValue : string = "";

  cookieValue : any
  
  
  setSession() {
    sessionStorage.setItem('name', 'session')
    sessionStorage.setItem('pass', 'session123')
  }
  
  getSession() {
   this.sessionValue = sessionStorage.getItem('name') ?? "";
  }
  
  removeSession() {
    sessionStorage.removeItem('pass')
  }
  

  setCookie() {
    this.cookie.set('token1', '12345', 1);
    this.cookie.set('token2', 'xyz');
  }
  
  getCookie() {
   this.cookieValue = this.cookie.get('token1');
  }

  deleteCookie() {
     this.cookie.delete('token1');
     this.cookieValue = "";
  }

  clearSession() {
    sessionStorage.clear();
    this.sessionValue = "";
  }
}
