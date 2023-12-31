import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cookieService: CookieService) {}

  /**
   * Returns token stored from local storage
   * @returns
   */
  getToken() {
    if (this.getRememberMe()) {
      return localStorage.getItem('token') || null;
    } else {
      return this.cookieService.get('token') || null;
    }
  }

  /**
   * Returns Remember Me value from local storage
   * @returns
   */
  getRememberMe() {
    const rememberMe: string | null = localStorage.getItem('rememberMe');
    return rememberMe && [true, 'true'].includes(rememberMe);
  }

  /**
   * Set Access Token
   */
  setToken(token: any) {
    if (this.getRememberMe()) {
      localStorage.setItem('token', token);
    } else {
      this.cookieService.set('token', token, 1, '/');
    }
  }

  /**
   * Remove Token
   */
  removeToken() {
    this.cookieService.delete('token');
    localStorage.removeItem('token');
  }

  /**
   * Returns if user logged in or not
   * @returns
   */
  isLoggedIn() {
    return this.getToken() !== null;
  }

  /**
   * Get Logged In User
   * @returns
   */
  getLoggedInUser() {
    const userToken = this.getToken();
    if (userToken) {
      const tokenSplit = userToken.split('.');
      if (tokenSplit.length > 0 && tokenSplit.length > 0 && tokenSplit[1]) {
        const user = JSON.parse(atob(tokenSplit[1]));
        return user || null;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
