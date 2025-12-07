import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'auth-token';
  private readonly USERNAME_KEY = 'username';
  private readonly EMAIL_KEY = 'user-email';
  private readonly USERID_KEY = 'user-id'; // NOVO

  setToken(token: string) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  setUsername(username: string) {
    sessionStorage.setItem(this.USERNAME_KEY, username);
  }

  getUsername(): string | null {
    return sessionStorage.getItem(this.USERNAME_KEY);
  }

  setUserEmail(email: string) {
    sessionStorage.setItem(this.EMAIL_KEY, email);
  }

  getUserEmail(): string | null {
    return sessionStorage.getItem(this.EMAIL_KEY);
  }

  // NOVOS MÉTODOS PARA USER ID
  setUserId(userId: number) {
    sessionStorage.setItem(this.USERID_KEY, userId.toString());
  }

  getUserId(): number {
    const id = sessionStorage.getItem(this.USERID_KEY);
    return id ? +id : 0; // Retorna 0 se não tiver
  }

  logout() {
    sessionStorage.clear();
  }
}
