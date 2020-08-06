import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(): boolean {
    if (window.atob(sessionStorage.getItem('loggedIn')) === 'true') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
