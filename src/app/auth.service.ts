import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  constructor() { }
  login(): boolean {
      this.isAuthenticated = true;
      return true;
  }

  logout(): boolean {
    this.isAuthenticated = false;
    return true;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

}
