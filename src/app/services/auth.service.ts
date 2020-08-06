import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  public login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      var encryptedPassword = window.btoa('true');
      sessionStorage.setItem('loggedIn', encryptedPassword);
      this.router.navigate(['/home']);
      return false;
    } else if  (username !== '' && password !== '' && username !== 'admin' && password !== 'admin') {
      return true;
    }
  }

  public logOut(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}


