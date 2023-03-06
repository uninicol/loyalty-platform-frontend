import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {AES} from 'crypto-js';
import {environment} from "../../environments/environment";

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
  }

  register(name: string, surname: string, email: string, password: string) {
    let encryptedPassword = AES.encrypt(password, environment.jwtKey).toString(); // con https non serve
    this.http.post<null>(`${environment.apiUrl}/client/auth/signup`, {name, surname, email, encryptedPassword});
    this.login(email, password)
  }

  login(email: string, password: string) {
    let encryptedPassword = AES.encrypt(password, environment.jwtKey).toString();
    let user = this.http.post<null>(`${environment.apiUrl}/client/auth/signin`, {email, encryptedPassword});
    this.saveUser(user)
  }

  logout() {
    this.http.post<null>(`${environment.apiUrl}/client/auth/signin`, {})
    this.clean()
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) return JSON.parse(user);
    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    return !!user;
  }

  private clean(): void {
    window.sessionStorage.clear();
  }

  private saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}
